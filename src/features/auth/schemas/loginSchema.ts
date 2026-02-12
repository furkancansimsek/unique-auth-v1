import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .max(128, 'Password too long')
    .regex(/\S/, 'Password cannot be only whitespace')
    .regex(/[A-Z]/, 'At least 1 uppercase')
    .regex(/[a-z]/, 'At least 1 lowercase')
    .regex(/[0-9]/, 'At least 1 number'),
});

export type LoginFormData = z.infer<typeof loginSchema>;
