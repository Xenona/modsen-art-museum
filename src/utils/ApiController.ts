import { API_ENDPOINT } from '@constants/api';
import { Art, artSchema, paginationSchema } from './schema';

export class ApiController {
  public static async getPage({
    page,
    limit = 12,
  }: {
    page: number;
    limit?: number;
  }): Promise<Art[]> {
    const response = await fetch(`${API_ENDPOINT}?page=${page}&limit=${limit}`);
    if (!response.ok) throw new Error('Could not fetch page');
    const data = await response.json();
    const artAndPagination = artSchema.safeParse(data);
    if (!artAndPagination.success) throw new Error('Retrieved data is in wrong format');
    const art: Art[] = artAndPagination.data.data;
    return art;
  }

  public static async getTotalPages(): Promise<number> {
    const response = await fetch(`${API_ENDPOINT}?fields=''`);
    if (!response.ok) throw new Error("Could not fetch total number of pages");
    const data = await response.json();
    const pagination = paginationSchema.safeParse(data);
    if (!pagination.success) throw new Error("Retrieved data is in wrong format");
    const numOfPages = pagination.data.total_pages;
    return numOfPages;
  }
}
