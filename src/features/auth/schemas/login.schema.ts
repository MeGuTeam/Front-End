import { z } from 'zod';

const usernameValidation = /^[a-zA-Z0-9_]{3,20}$/;

export const loginSchema = z.object({
  username: z.string().regex(usernameValidation, {
    message: '3-10 karakter, hanya huruf, angka, dan _',
  }),
  password: z.string().min(8, 'Minimal 8 karakter'),
});

export type LoginSchema = z.infer<typeof loginSchema>;
