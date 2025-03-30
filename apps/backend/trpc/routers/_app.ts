import { createTRPCRouter } from "../init.ts";
import { usersRouter } from "../procedures/users.procedure.ts";

export const appRouter = createTRPCRouter({
  users: usersRouter,
});

export type AppRouter = typeof appRouter;
