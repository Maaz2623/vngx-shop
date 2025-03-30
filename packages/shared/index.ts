import { appRouter } from "../../apps/backend/trpc/routers/_app";
import {
  createTRPCRouter,
  createCallerFactory,
} from "../../apps/backend/trpc/init";

export type { AppRouter } from "../../apps/backend/trpc/routers/_app.ts";

export { appRouter, createTRPCRouter, createCallerFactory };
