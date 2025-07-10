import { z } from 'zod';

const usernameValidation = /^[a-zA-Z0-9_]{3,20}$/;
const passwordValidation =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#])[A-Za-z\d!@#]{8,}$/;

export const registerSchema = z
  .object({
    username: z.string().regex(usernameValidation, {
      message: '3-10 karakter, hanya huruf, angka, dan _',
    }),
    password: z.string().regex(passwordValidation, {
      message:
        'Minimal 8 karakter, harus mengandung huruf besar, kecil, angka dan simbol (!@#)',
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Password tidak sama',
  });

export type RegisterSchema = z.infer<typeof registerSchema>;
