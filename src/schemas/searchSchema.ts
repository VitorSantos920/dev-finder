import { z } from 'zod';

export const searchSchema = z.object({
  username: z
    .string()
    .trim()
    .min(1, 'Username is required')
    .min(3, 'Username must be at least 3 characters')
    .max(39, 'Username must be at most 39 characters')
    .regex(
      /^[a-zA-Z0-9-]+$/,
      'Username can only contain letters, numbers and hyphens'
    )
    .transform((value) => value.toLowerCase()),
});

export type SearchFormData = z.infer<typeof searchSchema>;
