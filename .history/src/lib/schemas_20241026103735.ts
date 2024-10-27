import { z } from "zod";

export const SignUpSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, "Password must has at least 8 chars")
      .maxL(10, "Very long password"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export const LogInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must has at least 8 chars"),
});
