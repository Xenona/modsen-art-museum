import { z } from "zod";

export const paginationSchema = z.object({
  total_pages: z.number().int().nonnegative(),
});

export const artSchema = z.object({
  pagination: paginationSchema,
  data: z.array(
    z.object({
      id: z.number().int().positive(),
      artist_title: z.string().nullable(),
      date_display: z.string().nullable(),
      dimensions: z.string().nullable(),
      image_id: z.string().nullable(),
      title: z.string().nullable(),
      credit_line: z.string().nullable(),
      on_loan_display: z.string().nullable(),
      artist_display: z.string().nullable(),
      thumbnail: z.object({ alt_text: z.string().nullable() }).nullable(),
    }),
  ),
});

export type Art = z.infer<typeof artSchema>["data"][number];
export type Pagination = z.infer<typeof paginationSchema>;
