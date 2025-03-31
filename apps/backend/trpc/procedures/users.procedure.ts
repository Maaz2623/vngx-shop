import { db } from "../../db/index.ts";
import { usersTable } from "../../db/schema.ts";
import { baseProcedure, createTRPCRouter } from "../init.ts";
import z from "zod";

export const usersRouter = createTRPCRouter({
  getUsers: baseProcedure.query(async () => {
    const data = await db.select().from(usersTable);

    return data;
  }),
  createNewUser: baseProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
        age: z.number(),
      })
    )
    .mutation(async ({ input }) => {
      const [newUser] = await db
        .insert(usersTable)
        .values({
          name: input.name as string,
          email: input.email as string,
        })
        .returning();

      return newUser;
    }),
});
