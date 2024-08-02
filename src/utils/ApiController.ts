import { API_ENDPOINT } from '@constants/api';

export class ApiController {
  public static async getPage({
    page,
    limit = 12,
  }: {
    page: number;
    limit?: number;
  }) {
    const response = await fetch(`${API_ENDPOINT}?page=${page}&limit=${limit}`);
    if (!response.ok) throw new Error('Something went wrong');
    return response.json();
  }

  // public static async
}
