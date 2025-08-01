import { pgTable, integer } from "drizzle-orm/pg-core"
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "sqlite",
  dbCredentials: {
    url: "file:./db.sqlite",
  },
  verbose: true,
  breakpoints: true,
  tablesFilter: ["users", "posts"],
});

export const users = pgTable('users', {
    id: integer()
});
