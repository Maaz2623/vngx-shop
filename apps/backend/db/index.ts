import "dotenv/config"; // ✅ Load .env automatically
import { drizzle } from "drizzle-orm/neon-http";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set in environment variables.");
}

export const db = drizzle(process.env.DATABASE_URL);
