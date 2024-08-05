import { z } from "zod";

export const paginationSchema = z.object({
  total_pages: z.number().int().nonnegative(),
});

export const paginationDataSchema = z.object({
  pagination: paginationSchema,
});

export const artSchema = z.object({
  id: z.number().int().positive(),
  artist_title: z.string().nullable(),
  date_display: z.string().nullable(),
  date_start: z.number().nullable(),
  date_end: z.number().nullable(),
  dimensions: z.string().nullable(),
  image_id: z.string().nullable(),
  title: z.string().nullable(),
  credit_line: z.string().nullable(),
  on_loan_display: z.string().nullable(),
  artist_display: z.string().nullable(),
  thumbnail: z.object({ alt_text: z.string().nullable() }).nullable(),
});

export const artDataSchema = z.object({
  data: artSchema,
});

export const artDataArraySchema = z.object({
  data: z.array(artSchema),
});

export const artAndPaginationSchema =
  paginationDataSchema.merge(artDataArraySchema);

export const searchSchema = z.object({
  id: z.number().int().positive(),
});

export const searchDataSchema = z.object({
  data: z.array(searchSchema),
});

export const searchAndPaginationSchema =
  paginationDataSchema.merge(searchDataSchema);

export type Art = z.infer<typeof artSchema>;
