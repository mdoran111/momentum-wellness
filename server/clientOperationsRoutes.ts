import type { Express, NextFunction, Request, Response } from "express";
import { z } from "zod";
import {
  createClientOperationSchema,
  updateClientOperationSchema,
} from "@shared/clientOperations";
import { requireAdminSession } from "./adminAuth";
import {
  createClientOperationRecord,
  deleteClientOperationRecord,
  listClientOperationRecords,
  updateClientOperationRecord,
} from "./clientOperationsStore";

const idSchema = z.string().uuid();

function asyncRoute(
  handler: (
    request: Request,
    response: Response,
  ) => Promise<Response | void>,
) {
  return (request: Request, response: Response, next: NextFunction) => {
    void handler(request, response).catch(next);
  };
}

export function registerClientOperationsRoutes(app: Express) {
  const basePath = "/api/admin/client-operations";

  app.use(basePath, requireAdminSession);

  app.get(
    basePath,
    asyncRoute(async (_request, response) => {
      return response.json(await listClientOperationRecords());
    }),
  );

  app.post(
    basePath,
    asyncRoute(async (request, response) => {
      const parsed = createClientOperationSchema.safeParse(request.body);
      if (!parsed.success) {
        return response.status(400).json({
          message: "Review the operations checklist fields and try again.",
          issues: parsed.error.flatten(),
        });
      }

      return response
        .status(201)
        .json(await createClientOperationRecord(parsed.data));
    }),
  );

  app.put(
    `${basePath}/:id`,
    asyncRoute(async (request, response) => {
      const id = idSchema.safeParse(request.params.id);
      const parsed = updateClientOperationSchema.safeParse(request.body);

      if (!id.success || !parsed.success) {
        return response.status(400).json({
          message: "Review the operations checklist fields and try again.",
        });
      }

      const record = await updateClientOperationRecord(id.data, parsed.data);
      if (!record) {
        return response.status(409).json({
          message:
            "This checklist changed in another browser. Refresh and review the latest version before saving again.",
        });
      }

      return response.json(record);
    }),
  );

  app.delete(
    `${basePath}/:id`,
    asyncRoute(async (request, response) => {
      const id = idSchema.safeParse(request.params.id);
      if (!id.success) {
        return response.status(400).json({ message: "Invalid checklist ID." });
      }

      const deleted = await deleteClientOperationRecord(id.data);
      if (!deleted) {
        return response.status(404).json({ message: "Checklist not found." });
      }

      return response.status(204).end();
    }),
  );
}

