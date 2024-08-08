import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FavouritesPage } from ".";

jest.mock("@components/FavGallery", () => ({
  FavGallery: () => <div data-testid="fav-gallery">FavGallery</div>,
}));
jest.mock("@components/SectionHeader", () => ({
  SectionHeader: ({
    topText,
    bottomText,
  }: {
    topText: string;
    bottomText: string;
  }) => (
    <div data-testid="section-header">
      <div>{topText}</div>
      <div>{bottomText}</div>
    </div>
  ),
}));
jest.mock("@components/skeletons/ShortGallerySkeleton", () => ({
  ShortGallerySkeleton: () => (
    <div data-testid="short-gallery-skeleton">Loading...</div>
  ),
}));
jest.mock("@components/ErrorBoundary", () => ({
  ErrorBoundary: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="error-boundary">{children}</div>
  ),
}));

describe("FavouritesPage", () => {
  it("renders correctly", async () => {
    render(<FavouritesPage />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(within(heading).getByText("Here Are Your")).toBeInTheDocument();
    expect(
      within(heading).getByAltText("Yellow bookmark icon"),
    ).toBeInTheDocument();
    expect(within(heading).getByText("Favourites")).toBeInTheDocument();

    expect(screen.getByTestId("section-header")).toBeInTheDocument();
    expect(screen.getByText("Saved by you")).toBeInTheDocument();
    expect(screen.getByText("Your favorites list")).toBeInTheDocument();

    expect(screen.getByTestId("error-boundary")).toBeInTheDocument();

    expect(screen.getByTestId("fav-gallery")).toBeInTheDocument();
  });
});
