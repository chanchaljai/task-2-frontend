import { z } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";  

export const registerSchema = z.object({
    name: z.string().min(3).max(100),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    phone: z.string().refine(isValidPhoneNumber, {message: "Invalid phone number"}),
});
export type RegisterFormData = z.infer<typeof registerSchema>;