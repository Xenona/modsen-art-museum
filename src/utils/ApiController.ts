import { ARTWORKS_ENDPOINT } from "@constants/api";
import {
  Art,
  artAndPaginationSchema,
  artObjectSchema,
  paginationObjectSchema,
  searchAndPaginationSchema,
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

  public static async getTotalPages(
    { limit }: { limit?: number } = { limit: 12 },
  ): Promise<number | ApiError> {
    const response = await fetch(
      `${ARTWORKS_ENDPOINT}?fields=''&limit=${limit}`,
    );
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

  public static async getArtworks(ids: number[]): Promise<Art[]> {
    const fetchPromises = ids.map((id) => this.getArtwork(id));
    const results = await Promise.all(fetchPromises);

    const artworks: Art[] = [];
    const errors: ApiError[] = [];

    results.forEach((result) => {
      if (result instanceof ApiError) {
        errors.push(result);
      } else {
        artworks.push(result);
      }
    });

    if (errors.length) {
      console.error("Some artworks could not be fetched:", errors);
    }

    return artworks;
  }

  public static async getSearch({
    q,
    size = 12,
  }: {
    q: string;
    size?: number;
  }): Promise<Art[] | ApiError> {
    const response = await fetch(
      `${ARTWORKS_ENDPOINT}/search?q=${q}&size=${size}`,
    );
    if (response.status === 404)
      return new ApiError(404, "Artworks can not be found");
    if (!response.ok)
      return new ApiError(response.status, "Could not fetch the artwork");
    const data = await response.json();
    const searchAndPagination = searchAndPaginationSchema.safeParse(data);
    if (!searchAndPagination.success)
      return new ApiError(422, "Retrieved data is in wrong format");
    const artIds = searchAndPagination.data.data;
    const artworks = await this.getArtworks(artIds.map((id) => id.id));
    return artworks;
  }
}
