// zod types

import { z } from "zod";

export const CreateUserSchema = z.object({
    email: z.string().email({ message: "Invalid email format" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters" }),
    name: z.string().min(3)
})