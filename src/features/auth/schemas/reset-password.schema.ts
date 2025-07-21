import { z } from 'zod';

const passwordValidation =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#])[A-Za-z\d!@#]{8,}$/;

export const resetPasswordSchema = z
  .object({
    oldPassword: z.string().regex(passwordValidation, {
      message: 'Minimal 8 karakter, huruf kapital, kecil, angka, simbol',
    }),
    newPassword: z.string().regex(passwordValidation, {
      message: 'Minimal 8 karakter, huruf kapital, kecil, angka, simbol',
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Password tidak sama',
  });

export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;
