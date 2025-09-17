import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, date } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  mpin: text("mpin").notNull(), // 4-digit MPIN (hashed)
  completeName: text("complete_name").notNull(),
  completeAddress: text("complete_address"),
  age: integer("age"),
  dateOfBirth: date("date_of_birth"),
  gender: text("gender"),
  weight: integer("weight"),
  height: integer("height"),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
});

export const insertUserSchema = createInsertSchema(users).pick({
  email: true,
  mpin: true,
  completeName: true,
  completeAddress: true,
  age: true,
  dateOfBirth: true,
  gender: true,
  weight: true,
  height: true,
});

export const loginSchema = z.object({
  email: z.string().email(),
  mpin: z.string().length(4, "MPIN must be exactly 4 digits").regex(/^\d{4}$/, "MPIN must contain only digits"),
});

export const updateProfileSchema = createInsertSchema(users).pick({
  completeName: true,
  completeAddress: true,
  age: true,
  dateOfBirth: true,
  gender: true,
  weight: true,
  height: true,
}).partial();

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type LoginRequest = z.infer<typeof loginSchema>;
export type UpdateProfileRequest = z.infer<typeof updateProfileSchema>;
