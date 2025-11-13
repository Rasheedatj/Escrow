import z from 'zod';

export const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Enter a valid email'),
  password: z
    .string()
    .nonempty('Password is required')
    .min(6, 'Password should be at least 6 characters'),
});

export const signUpSchema = z
  .object({
    name: z.string().min(1, 'Full Name is required'),
    email: z.string().min(1, 'Email is required').email('Enter a valid email'),
    password: z.string().min(6, 'Password should be at least 6 characters'),
    confirmPassword: z
      .string()
      .min(6, 'Password should be at least 6 characters'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });

export type LoginFormData = z.infer<typeof loginSchema>;
export type SignUpFormData = z.infer<typeof signUpSchema>;
