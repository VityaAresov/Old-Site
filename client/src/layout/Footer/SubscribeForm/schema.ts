import { z } from 'zod';

export const validationSchema = z.object({
  email: z.string().min(1, { message: 'Email address is required' }).email({
    message: 'Must be a valid email address',
  }),
});

export type ValidationSchema = z.infer<typeof validationSchema>;
