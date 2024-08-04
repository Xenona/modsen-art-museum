import { ApiController } from './ApiController';
import {
  artSchema,
  artAndPaginationSchema,
  paginationObjectSchema,
  searchAndPaginationSchema,
  artObjectSchema,
} from './schema';
import { z } from 'zod';

jest.mock('./ApiController', () => ({
  ApiController: {
    getPage: jest.fn(),
    getTotalPages: jest.fn(),
    getArtwork: jest.fn(),
    getArtworks: jest.fn(),
    getSearch: jest.fn(),
  },
}));

describe('ApiController', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch a page of artworks', async () => {
    const mockArtworks = {
      pagination: { total_pages: 10 },
      data: [
        {
          id: 1,
          artist_title: 'Artist 1',
          date_display: '2021-01-01',
          date_start: 2021,
          date_end: 2022,
          dimensions: '10x10',
          image_id: 'img1',
          title: 'Art 1',
          credit_line: 'Credit 1',
          on_loan_display: 'On loan',
          artist_display: 'Artist Display 1',
          thumbnail: { alt_text: 'Thumbnail 1' },
        },
      ],
    };

    (ApiController.getPage as jest.Mock).mockResolvedValue(mockArtworks);

    const page = 1;
    const limit = 12;
    const result = await ApiController.getPage({ page, limit });

    const parsedResult = artAndPaginationSchema.parse(result);
    expect(parsedResult).toEqual(mockArtworks);
    expect(ApiController.getPage).toHaveBeenCalledWith({ page, limit });
  });

  it('should handle error when fetching a page of artworks', async () => {
    const mockError = new ApiError(500, 'Internal Server Error');
    (ApiController.getPage as jest.Mock).mockResolvedValue(mockError);

    const page = 1;
    const limit = 12;
    const result = await ApiController.getPage({ page, limit });

    expect(result).toBeInstanceOf(ApiError);
    expect(result).toEqual(mockError);
    expect(ApiController.getPage).toHaveBeenCalledWith({ page, limit });
  });

  it('should fetch total pages', async () => {
    const mockPagination = { pagination: { total_pages: 10 } };
    (ApiController.getTotalPages as jest.Mock).mockResolvedValue(
      mockPagination,
    );

    const limit = 12;
    const result = await ApiController.getTotalPages({ limit });

    const parsedResult = paginationObjectSchema.parse(result);
    expect(parsedResult).toEqual(mockPagination);
    expect(ApiController.getTotalPages).toHaveBeenCalledWith({ limit });
  });

  it('should fetch an artwork by id', async () => {
    const mockArt = {
      data: {
        id: 1,
        artist_title: 'Artist 1',
        date_display: '2021-01-01',
        date_start: 2021,
        date_end: 2022,
        dimensions: '10x10',
        image_id: 'img1',
        title: 'Art 1',
        credit_line: 'Credit 1',
        on_loan_display: 'On loan',
        artist_display: 'Artist Display 1',
        thumbnail: { alt_text: 'Thumbnail 1' },
      },
    };

    (ApiController.getArtwork as jest.Mock).mockResolvedValue(mockArt);

    const id = 1;
    const result = await ApiController.getArtwork(id);

    const parsedResult = artObjectSchema.parse(result);
    expect(parsedResult).toEqual(mockArt);
    expect(ApiController.getArtwork).toHaveBeenCalledWith(id);
  });

  it('should handle error when fetching an artwork by id', async () => {
    const mockError = new ApiError(404, 'Artwork can not be found');
    (ApiController.getArtwork as jest.Mock).mockResolvedValue(mockError);

    const id = 1;
    const result = await ApiController.getArtwork(id);

    expect(result).toBeInstanceOf(ApiError);
    expect(result).toEqual(mockError);
    expect(ApiController.getArtwork).toHaveBeenCalledWith(id);
  });

  it('should fetch artworks by ids', async () => {
    const mockArtworks = [
      {
        id: 1,
        artist_title: 'Artist 1',
        date_display: '2021-01-01',
        date_start: 2021,
        date_end: 2022,
        dimensions: '10x10',
        image_id: 'img1',
        title: 'Art 1',
        credit_line: 'Credit 1',
        on_loan_display: 'On loan',
        artist_display: 'Artist Display 1',
        thumbnail: { alt_text: 'Thumbnail 1' },
      },
    ];

    (ApiController.getArtworks as jest.Mock).mockResolvedValue(mockArtworks);

    const ids = [1];
    const result = await ApiController.getArtworks(ids);

    const parsedResult = z.array(artSchema).parse(result);
    expect(parsedResult).toEqual(mockArtworks);
    expect(ApiController.getArtworks).toHaveBeenCalledWith(ids);
  });

  it('should search artworks', async () => {
    const mockSearchResults = {
      pagination: { total_pages: 10 },
      data: [{ id: 1 }],
    };

    (ApiController.getSearch as jest.Mock).mockResolvedValue(mockSearchResults);

    const q = 'query';
    const size = 12;
    const result = await ApiController.getSearch({ q, size });

    const parsedResult = searchAndPaginationSchema.parse(result);
    expect(parsedResult).toEqual(mockSearchResults);
    expect(ApiController.getSearch).toHaveBeenCalledWith({ q, size });
  });

  it('should handle error when searching artworks', async () => {
    const mockError = new ApiError(404, 'Artworks can not be found');
    (ApiController.getSearch as jest.Mock).mockResolvedValue(mockError);

    const q = 'query';
    const size = 12;
    const result = await ApiController.getSearch({ q, size });

    expect(result).toBeInstanceOf(ApiError);
    expect(result).toEqual(mockError);
    expect(ApiController.getSearch).toHaveBeenCalledWith({ q, size });
  });
});
