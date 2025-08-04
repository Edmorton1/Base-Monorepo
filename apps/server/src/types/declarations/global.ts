import "express-session"
import "express";
import z from "zod";

export const UserRoleSchema = z.enum(["user", "admin"]);

export type UserRoleType = z.infer<typeof UserRoleSchema>;

interface SessionDataResolved {
  userid?: number;
  role?: UserRoleType;
  is_google_user?: boolean
  state?: string;
}

declare module "express-session" {
  interface SessionData extends SessionDataResolved {}
}

