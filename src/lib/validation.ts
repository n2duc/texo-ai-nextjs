import { z } from "zod";

const requiredString = z.string().trim().min(1, "Required");

export const loginSchema = z.object({
  email: requiredString.email("Invalid email address"),
  password: requiredString,
})

export type LoginValues = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  fullname: requiredString,
  email: requiredString.email("Invalid email address"),
  password: requiredString.min(8, "Password must be at least 8 characters"),
  confirmPassword: requiredString
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
})

export type RegisterValues = z.infer<typeof registerSchema>;