import { Art } from "src/types/schema";

export const getValidDate = (art: Art): number | null => {
  const startDate = art.date_start ? new Date(art.date_start).getTime() : null;
  const endDate = art.date_end ? new Date(art.date_end).getTime() : null;
  if (startDate !== null && endDate !== null) {
    return Math.min(startDate, endDate);
  }
  return startDate ?? endDate ?? null;
};
