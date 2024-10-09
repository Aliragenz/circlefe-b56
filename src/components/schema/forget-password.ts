import {z} from "zod";

export const forgetPasswordSchema = z.object({
    email: z.string().email("Invalid Email Address"),
});

export type ForgetPasswordFormInputs = z.infer<typeof forgetPasswordSchema>
