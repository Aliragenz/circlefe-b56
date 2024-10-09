import { z } from "zod";

export const resetPasswordSchema = z
  .object({
    newpassword: z.string().min(4, "Password must be at least 8 characters long"),
    confirmnewpassword: z.string().min(4, "Password must be at least 8 characters long"),
  })
  .refine((data) => data.newpassword === data.confirmnewpassword, {
    message: "Passwords must match",
    path: ["Form"], // This specifies where the error should appear
  });

export type ResetPasswordFormInputs = z.infer<typeof resetPasswordSchema>;
