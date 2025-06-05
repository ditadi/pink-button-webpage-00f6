
import { serial, text, pgTable, timestamp } from 'drizzle-orm/pg-core';

export const buttonClicksTable = pgTable('button_clicks', {
  id: serial('id').primaryKey(),
  clicked_at: timestamp('clicked_at').defaultNow().notNull(),
  user_ip: text('user_ip') // Nullable by default
});

// TypeScript type for the table schema
export type ButtonClick = typeof buttonClicksTable.$inferSelect;
export type NewButtonClick = typeof buttonClicksTable.$inferInsert;

// Export all tables for proper query building
export const tables = { buttonClicks: buttonClicksTable };
