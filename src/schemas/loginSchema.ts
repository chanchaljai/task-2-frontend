import { z } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";  

export const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    phone: z.string().refine(isValidPhoneNumber, {message: "Invalid phone number"}),
});
export type LoginFormData = z.infer<typeof loginSchema>;