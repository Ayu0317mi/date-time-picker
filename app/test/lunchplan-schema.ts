//lunchplan-schema.ts
import { z } from "zod";

export const lunchPlanSchema = z.object({
  id: z.string(),
  time: z.date(),
});

export type LunchFormValues = z.infer<typeof lunchPlanSchema>;
