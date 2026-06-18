import type { NextConfig } from "next";

const REQUIRED_ENV_VARS = ["CONTACT_EMAIL", "BUILD_AUTHORIZED_DEPLOY"] as const;
const FORBIDDEN_PUBLIC_PREFIX = ["CONTACT_EMAIL", "BUILD_AUTHORIZED_DEPLOY"] as const;

function validateEnvGuard(): void {
  if (process.env.NODE_ENV !== "production") return;

  for (const key of REQUIRED_ENV_VARS) {
    if (!process.env[key]) {
      console.warn(
        `[STATIC ENV GUARD] Optional env var "${key}" not set — skipping.`,
      );
    }
  }

  for (const key of FORBIDDEN_PUBLIC_PREFIX) {
    if (process.env[`NEXT_PUBLIC_${key}`]) {
      console.warn(
        `[STATIC ENV GUARD] WARNING: ${key} is a server-side secret — ` +
          "do NOT prefix with NEXT_PUBLIC_ or it will leak to the client bundle.",
      );
    }
  }
}

validateEnvGuard();

const nextConfig: NextConfig = {};

export default nextConfig;
