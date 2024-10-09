import {z} from "zod";

export const createThreadSchema = z.object({
    userId: z.number().positive().optional(),
    content: z.string(),
    image: z
    .instanceof(FileList)
    .refine((files) => files.length === 0 || files.length > 0, "Either content or image is required")
});

export type CreateThreadFormInputs = z.infer<typeof createThreadSchema>
