import { z } from "zod";

const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#])[A-Za-z\d!@#]{8,}$/;

const resetPasswordSchema = z.object({
    password: z.string().regex(passwordValidation, {
        message: "Minimal 8 karakter, huruf kapital, kecil, angka, simbol",
    }),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password tidak sama",
});

export type resetPasswordSchema = z.infer<typeof resetPasswordSchema>;