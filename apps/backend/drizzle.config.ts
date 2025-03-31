import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";
import "dotenv/config"; // ✅ Load .env automatically

dotenv.config({
  path: ".env.local",
});

export default defineConfig({
  out: "./drizzle",
  schema: "./db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
