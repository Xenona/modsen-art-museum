import { z } from "zod";

export const paginationSchema = z.object({
  total_pages: z.number().int().nonnegative(),
});

export const paginationObjectSchema = z.object({
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

export const artObjectSchema = z.object({
  data: artSchema,
});

export const artObjectArraySchema = z.object({
  data: z.array(artSchema),
});

export const artAndPaginationSchema =
  paginationObjectSchema.merge(artObjectArraySchema);

export type ArtAndPagination = z.infer<typeof artAndPaginationSchema>;
export type Art = z.infer<typeof artSchema>;

export type Pagination = z.infer<typeof paginationSchema>;
export type PaginationObject = z.infer<typeof paginationObjectSchema>;
