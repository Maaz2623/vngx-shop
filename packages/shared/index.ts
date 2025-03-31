import { appRouter } from "../../apps/backend/trpc/routers/_app";
import {
  createTRPCRouter,
  createCallerFactory,
} from "../../apps/backend/trpc/init";
import { db } from "../../apps/backend/db";
import { usersTable } from "../../apps/backend/db/schema.ts";

export type { AppRouter } from "../../apps/backend/trpc/routers/_app.ts";

export { db, usersTable, appRouter, createTRPCRouter, createCallerFactory };
