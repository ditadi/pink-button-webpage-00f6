
import { z } from 'zod';

// Schema for button click tracking
export const buttonClickSchema = z.object({
  id: z.number(),
  clicked_at: z.coerce.date(),
  user_ip: z.string().nullable()
});

export type ButtonClick = z.infer<typeof buttonClickSchema>;

// Input schema for recording button clicks
export const recordClickInputSchema = z.object({
  user_ip: z.string().nullable()
});

export type RecordClickInput = z.infer<typeof recordClickInputSchema>;
