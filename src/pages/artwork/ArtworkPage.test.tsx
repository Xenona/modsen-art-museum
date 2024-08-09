import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { ArtworkPage } from ".";
import { Art } from "@utils/api/ApiSchema.ts";
import { FavStorageProvider } from "@utils/hooks/FavStorageProvider";
import { ApiError } from "@utils/api/ApiError.ts";

jest.mock("@utils/api/ApiController", () => ({
  ApiController: {
    getArtwork: jest.fn(),
  },
}));

jest.mock("@tanstack/react-query", () => ({
  useSuspenseQuery: jest.fn(),
}));

describe("ArtworkPage", () => {
  it("renders the artwork details correctly", () => {
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
      require("@tanstack/react-query").useSuspenseQuery as jest.Mock
    ).mockReturnValue({
      data: artworkMock,
      error: null,
    });

    render(
      <FavStorageProvider>
        <MemoryRouter initialEntries={["/artwork/1"]}>
          <Routes>
            <Route path="/artwork/:id" element={<ArtworkPage />} />
            <Route path="/404" element={<div>404 Page</div>} />
            <Route path="/500" element={<div>500 Page</div>} />
          </Routes>
        </MemoryRouter>
      </FavStorageProvider>,
    );

    expect(screen.getByText("Artwork Title")).toBeInTheDocument();
    expect(screen.getByText("Artist Title")).toBeInTheDocument();
    expect(screen.getByText("2024")).toBeInTheDocument();
    expect(screen.getByText("Artist Nationality")).toBeInTheDocument();
    expect(screen.getByText("20x30 cm")).toBeInTheDocument();
    expect(screen.getByText("Credit Line")).toBeInTheDocument();
    expect(screen.getByText("On Loan")).toBeInTheDocument();
    expect(screen.getByAltText("Artwork Thumbnail")).toBeInTheDocument();
  });

  it("redirects to 404 if the ID is invalid", () => {
    render(
      <FavStorageProvider>
        <MemoryRouter initialEntries={["/artwork/invalid"]}>
          <Routes>
            <Route path="/artwork/:id" element={<ArtworkPage />} />
            <Route path="/404" element={<div>404 Page</div>} />
          </Routes>
        </MemoryRouter>
      </FavStorageProvider>,
    );

    expect(screen.getByText("404 Page")).toBeInTheDocument();
  });

  it("handles API errors and redirects accordingly", () => {
    (
      require("@tanstack/react-query").useSuspenseQuery as jest.Mock
    ).mockReturnValue({
      data: new ApiError(500, "Server error"),
      error: null,
    });

    render(
      <FavStorageProvider>
        <MemoryRouter initialEntries={["/artwork/1"]}>
          <Routes>
            <Route path="/artwork/:id" element={<ArtworkPage />} />
            <Route path="/500" element={<div>500 Page</div>} />
          </Routes>
        </MemoryRouter>
      </FavStorageProvider>,
    );

    expect(screen.getByText("500 Page")).toBeInTheDocument();
  });
});
