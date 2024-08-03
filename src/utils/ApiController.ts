import { ARTWORKS_ENDPOINT } from "@constants/api";
import {
  Art,
  artAndPaginationSchema,
  artObjectSchema,
  paginationObjectSchema,
} from "./schema";
import { ApiError } from "./ApiError";

export class ApiController {
  public static async getPage({
    page,
    limit = 12,
  }: {
    page: number;
    limit?: number;
  }): Promise<Art[] | ApiError> {
    const response = await fetch(
      `${ARTWORKS_ENDPOINT}?page=${page}&limit=${limit}`,
    );
    if (!response.ok)
      return new ApiError(response.status, "Could not fetch page");
    const data = await response.json();
    const artAndPagination = artAndPaginationSchema.safeParse(data);
    if (!artAndPagination.success)
      return new ApiError(422, "Retrieved data is in wrong format");
    const art: Art[] = artAndPagination.data.data;
    return art;
  }

  public static async getTotalPages(): Promise<number | ApiError> {
    const response = await fetch(`${ARTWORKS_ENDPOINT}?fields=''`);
    if (!response.ok)
      return new ApiError(
        response.status,
        "Could not fetch total number of pages",
      );
    const data = await response.json();
    const pagination = paginationObjectSchema.safeParse(data);
    if (!pagination.success)
      return new ApiError(422, "Retrieved data is in wrong format");
    const numOfPages = pagination.data.pagination.total_pages;
    return numOfPages;
  }

  public static async getArtwork(id: number): Promise<Art | ApiError> {
    const response = await fetch(`${ARTWORKS_ENDPOINT}/${id}`);
    if (response.status === 404)
      return new ApiError(404, "Artwork can not be found");
    if (!response.ok)
      return new ApiError(response.status, "Could not fetch the artwork");
    const data = await response.json();
    const art = artObjectSchema.safeParse(data);
    if (!art.success)
      return new ApiError(422, "Retrieved data is in wrong format");
    return art.data.data;
  }
}
