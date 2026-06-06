import { useState, type FormEvent, type ReactNode } from "react";
import { LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const sessionKey = "momentum-admin-tools-unlocked";
const configuredPassword = import.meta.env.VITE_ADMIN_TOOL_PASSWORD;

function isSessionUnlocked() {
  if (!configuredPassword) {
    return true;
  }

  if (typeof window === "undefined") {
    return false;
  }

  return window.sessionStorage.getItem(sessionKey) === "true";
}

export default function AdminToolGate({
  toolName,
  children,
}: {
  toolName: string;
  children: ReactNode;
}) {
  const [isUnlocked, setIsUnlocked] = useState(isSessionUnlocked);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleUnlock = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== configuredPassword) {
      setPasswordError("Incorrect password.");
      return;
    }

    window.sessionStorage.setItem(sessionKey, "true");
    setPasswordError("");
    setPassword("");
    setIsUnlocked(true);
  };

  if (isUnlocked) {
    return children;
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0f172a] px-4 py-16 text-white">
      <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 shadow-2xl sm:p-10">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-400">
          <LockKeyhole className="h-7 w-7" />
        </div>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
          Internal tool
        </p>
        <h1 className="mt-3 text-3xl font-bold">{toolName}</h1>
        <p className="mt-4 leading-7 text-slate-400">
          Enter the internal tool password to continue.
        </p>

        <form onSubmit={handleUnlock} className="mt-8 space-y-5">
          <div className="space-y-2">
            <Label htmlFor="admin-password" className="text-white">
              Password
            </Label>
            <Input
              id="admin-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              required
              className="h-12 rounded-xl border-white/10 bg-white/5 text-white"
            />
          </div>
          {passwordError && (
            <p role="alert" className="text-sm leading-6 text-red-300">
              {passwordError}
            </p>
          )}
          <Button
            type="submit"
            className="min-h-12 w-full rounded-full border-0 bg-emerald-500 font-semibold text-white hover:bg-emerald-400"
          >
            Unlock Tool
          </Button>
        </form>
      </div>
    </main>
  );
}
