import z from "zod";

export const profileSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z
        .string()
        .trim()
        .email("Please enter a valid email address")
        .or(z.literal(""))
        .optional(),
    address: z.string().optional().or(z.literal("")),
    dateOfBirth: z.string().optional().or(z.literal("")),
    gender: z.string().optional().or(z.literal("")),
    bloodGroup: z.string().optional().or(z.literal("")),
    timezone: z.string().optional().or(z.literal("")),
    country: z.string().optional().or(z.literal("")),
    language: z.string().optional().or(z.literal("")),
    pinCode: z
        .string()
        .regex(/^\d{6}$/, "Pin code must be 6 digits")
        .or(z.literal(""))
        .optional(),
    locality: z.string().optional().or(z.literal("")),
    city: z.string().optional().or(z.literal("")),
    state: z.string().optional().or(z.literal("")),
    phone: z.string().min(10, "Phone number must be at least 10 digits").or(z.literal("")).optional()
})

export type ProfileFormSchemaValues = z.infer<typeof profileSchema>