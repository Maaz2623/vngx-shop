import { db } from "../../db/index.ts";
import { usersTable } from "../../db/schema.ts";
import { baseProcedure, createTRPCRouter } from "../init.ts";

export const usersRouter = createTRPCRouter({
  getUsers: baseProcedure.query(async () => {
    const data = await db.select().from(usersTable);

    return data;
  }),
});
