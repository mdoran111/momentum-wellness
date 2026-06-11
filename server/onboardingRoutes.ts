import type { Express, NextFunction, Request, Response } from "express";
import { z } from "zod";
import {
  createOnboardingRecordSchema,
  importOnboardingRecordsSchema,
  updateOnboardingRecordSchema,
} from "@shared/onboarding";
import { requireAdminSession } from "./adminAuth";
import {
  createOnboardingRecord,
  deleteOnboardingRecord,
  importOnboardingRecords,
  listOnboardingRecords,
  updateOnboardingRecord,
} from "./onboardingStore";

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

function isDuplicateEmailError(error: unknown) {
  return (
    error instanceof Error &&
    "code" in error &&
    (error as Error & { code?: string }).code === "23505"
  );
}

export function registerOnboardingRoutes(app: Express) {
  const basePath = "/api/admin/onboarding-records";

  app.use(basePath, requireAdminSession);

  app.get(
    basePath,
    asyncRoute(async (_request, response) => {
      return response.json(await listOnboardingRecords());
    }),
  );

  app.post(
    basePath,
    asyncRoute(async (request, response) => {
      const parsed = createOnboardingRecordSchema.safeParse(request.body);
      if (!parsed.success) {
        return response.status(400).json({
          message: "Review the record fields and try again.",
          issues: parsed.error.flatten(),
        });
      }

      try {
        const record = await createOnboardingRecord(parsed.data);
        return response.status(201).json(record);
      } catch (error) {
        if (isDuplicateEmailError(error)) {
          return response.status(409).json({
            message: "A record already exists for this email address.",
          });
        }
        throw error;
      }
    }),
  );

  app.put(
    `${basePath}/:id`,
    asyncRoute(async (request, response) => {
      const id = idSchema.safeParse(request.params.id);
      const parsed = updateOnboardingRecordSchema.safeParse(request.body);

      if (!id.success || !parsed.success) {
        return response.status(400).json({
          message: "Review the record fields and try again.",
        });
      }

      try {
        const record = await updateOnboardingRecord(id.data, parsed.data);
        if (!record) {
          return response.status(409).json({
            message:
              "This record changed in another browser. Refresh and review the latest version before saving again.",
          });
        }

        return response.json(record);
      } catch (error) {
        if (isDuplicateEmailError(error)) {
          return response.status(409).json({
            message: "A record already exists for this email address.",
          });
        }
        throw error;
      }
    }),
  );

  app.delete(
    `${basePath}/:id`,
    asyncRoute(async (request, response) => {
      const id = idSchema.safeParse(request.params.id);
      if (!id.success) {
        return response.status(400).json({ message: "Invalid record ID." });
      }

      const deleted = await deleteOnboardingRecord(id.data);
      if (!deleted) {
        return response.status(404).json({ message: "Record not found." });
      }

      return response.status(204).end();
    }),
  );

  app.post(
    `${basePath}/import`,
    asyncRoute(async (request, response) => {
      const parsed = importOnboardingRecordsSchema.safeParse(request.body);
      if (!parsed.success) {
        return response.status(400).json({
          message: "The local records could not be imported.",
        });
      }

      return response.json(await importOnboardingRecords(parsed.data.records));
    }),
  );
}
