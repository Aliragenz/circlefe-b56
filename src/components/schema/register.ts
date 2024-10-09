import {z} from "zod";

export const registerSchema = z.object({
    fullName: z.string().min(4, "Full Name Required must be at least 4 character"),
    email: z.string().email("Invalid Email Address"),
    password: z.string().min(8, "Password must be at least 8 character"),
});

export type RegisterFormInputs = z.infer<typeof registerSchema>
