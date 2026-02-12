import { z } from 'zod';

export const registerSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .max(128, 'Password too long')
    .regex(/\S/, 'Password cannot be only whitespace')
    .regex(/[A-Z]/, 'At least 1 uppercase')
    .regex(/[a-z]/, 'At least 1 lowercase')
    .regex(/[0-9]/, 'At least 1 number'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

export type RegisterFormData = z.infer<typeof registerSchema>;
