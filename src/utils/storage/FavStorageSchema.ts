import { z } from "zod";

export const favStorageSchema = z.array(
  z.number().int().positive().max(Number.MAX_SAFE_INTEGER),
);
