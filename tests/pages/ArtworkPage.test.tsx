import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { ArtworkPage } from "../../src/pages/artwork";
import { FavStorageProvider } from "@utils/hooks/FavStorageProvider";
import { ApiError } from "@utils/api/ApiError";
import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme";
import { Art } from "src/types/schema";

jest.mock("@utils/api/ApiController", () => ({
  ApiController: {
    getArtwork: jest.fn(),
  },
}));

jest.mock("@utils/hooks/useFetch", () => ({
  useSuspenseQuery: jest.fn(),
}));

describe("ArtworkPage", () => {
  it("renders the artwork details correctly", async () => {
    const artworkMock: Art = {
      id: 1,
      image_id: "image123",
      title: "Artwork Title",
      artist_title: "Artist Title",
      date_display: "2024",
      date_start: 2024,
      date_end: 2024,
      artist_display: "Artist Nationality",
      dimensions: "20x30 cm",
      credit_line: "Credit Line",
      on_loan_display: "On Loan",
      thumbnail: { alt_text: "Artwork Thumbnail" },
    };

    (
      require("@utils/hooks/useFetch").useSuspenseQuery as jest.Mock
    ).mockReturnValue(artworkMock);

    render(
      <ThemeProvider theme={theme}>
        <FavStorageProvider>
          <MemoryRouter initialEntries={["/artwork/1"]}>
            <Routes>
              <Route path="/artwork/:id" element={<ArtworkPage />} />
              <Route path="/404" element={<div>404 Page</div>} />
              <Route path="/500" element={<div>500 Page</div>} />
            </Routes>
          </MemoryRouter>
        </FavStorageProvider>
      </ThemeProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText("Artwork Title")).toBeInTheDocument();
      expect(screen.getByText("Artist Title")).toBeInTheDocument();
      expect(screen.getByText("2024")).toBeInTheDocument();
      expect(screen.getByText("Artist Nationality")).toBeInTheDocument();
      expect(screen.getByText("20x30 cm")).toBeInTheDocument();
      expect(screen.getByText("Credit Line")).toBeInTheDocument();
      expect(screen.getByText("On Loan")).toBeInTheDocument();
      expect(screen.getByAltText("Artwork Thumbnail")).toBeInTheDocument();
    });
  });

  it("redirects to 404 if the ID is invalid", async () => {
    render(
      <ThemeProvider theme={theme}>
        <FavStorageProvider>
          <MemoryRouter initialEntries={["/artwork/invalid"]}>
            <Routes>
              <Route path="/artwork/:id" element={<ArtworkPage />} />
              <Route path="/404" element={<div>404 Page</div>} />
            </Routes>
          </MemoryRouter>
        </FavStorageProvider>
      </ThemeProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText("404 Page")).toBeInTheDocument();
    });
  });

  it("handles API errors and redirects accordingly", async () => {
    (
      require("@utils/hooks/useFetch").useSuspenseQuery as jest.Mock
    ).mockReturnValue(new ApiError(500, "Server error"));

    render(
      <ThemeProvider theme={theme}>
        <FavStorageProvider>
          <MemoryRouter initialEntries={["/artwork/1"]}>
            <Routes>
              <Route path="/artwork/:id" element={<ArtworkPage />} />
              <Route path="/500" element={<div>500 Page</div>} />
            </Routes>
          </MemoryRouter>
        </FavStorageProvider>
      </ThemeProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText("500 Page")).toBeInTheDocument();
    });
  });
});
