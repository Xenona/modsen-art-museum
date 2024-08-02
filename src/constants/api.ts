export const API_ENDPOINT = 'https://api.artic.edu/api/v1/artworks';
export const IMAGE_LOWQ_ENDPOINT = (id: number | string) =>
  `https://www.artic.edu/iiif/2/${id}/full/450,/0/default.jpg`;
export const IMAGE_HIGHQ_ENDPOINT = (id: number | string) =>
  `https://www.artic.edu/iiif/2/${id}/full/450,/0/default.jpg`;
