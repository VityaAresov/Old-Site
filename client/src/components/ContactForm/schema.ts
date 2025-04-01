import { z } from 'zod';

const phoneRegex = new RegExp(/^([+]?\s?\d+)?(\d{3}|[(]?\d+[)])?([-]?\s?\d)+$/);

export const validationSchema = z.object({
  fullName: z.string().min(3, { message: 'Full name is required' }),
  email: z.string().min(1, { message: 'Email address is required' }).email({
    message: 'Must be a valid email address',
  }),
  phone: z.string().min(7, { message: 'Phone number is required' }).regex(phoneRegex, 'Must be a valid phone number'),
  message: z.string(),
});

export type ValidationSchema = z.infer<typeof validationSchema>;
