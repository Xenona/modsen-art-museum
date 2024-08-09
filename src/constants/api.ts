export const ARTWORKS_ENDPOINT = "https://api.artic.edu/api/v1/artworks";

export const ARTWORK_ID_ENDPOINT = (id: number) => `${ARTWORKS_ENDPOINT}/${id}`;

export const ARTWORKS_PARAMETRIZED_ENDPOINT = ({
  fields = "",
  limit,
  page = 1,
}: Partial<{
  fields: string;
  limit: number;
  page: number;
}>) => `${ARTWORKS_ENDPOINT}?page=${page}&limit=${limit}$fields=${fields}`;

export const IMAGE_ENDPOINT = (id: number | string) =>
  `https://www.artic.edu/iiif/2/${id}/full/full/0/default.jpg`;

export const SEARCH_ENDPOINT = (size: number, q: string) =>
  `${ARTWORKS_ENDPOINT}/search?q=${q}&size=${size}`;
