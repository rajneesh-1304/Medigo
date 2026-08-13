import z from "zod";

export const profileSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z
        .string()
        .trim()
        .email("Please enter a valid email address")
        .or(z.literal(""))
        .optional(),
    address: z.string().optional(),
    dateOfBirth: z.string().optional(),
    gender: z.string().optional(),
    bloodGroup: z.string().optional(),
    timezone: z.string().optional(),
    country: z.string().optional(),
    language: z.string().optional(),
    pinCode: z
        .string()
        .regex(/^\d{6}$/, "Pin code must be 6 digits")
        .or(z.literal(""))
        .optional(),
    locality: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    phone: z.string().optional()
})

export type ProfileFormSchemaValues = z.infer<typeof profileSchema>