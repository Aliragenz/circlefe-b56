import {z} from "zod";

export const updateUserSchema = z.object({
    fullName: z.string(),
    userName: z.string().optional(),
    bio: z.string().optional(),
    image: z
    .instanceof(FileList)
    .optional()
});

export type updateUserFormInputs = z.infer<typeof updateUserSchema>
