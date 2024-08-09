import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HomePage } from "../../src/pages/home";

jest.mock("@components/SearchInput", () => ({
  SearchInput: () => <div data-testid="search-input">SearchInput</div>,
}));
jest.mock("@components/SpecialGallery", () => ({
  SpecialGallery: () => <div data-testid="special-gallery">SpecialGallery</div>,
}));
jest.mock("@components/RandomGallery", () => ({
  RandomGallery: () => <div data-testid="random-gallery">RandomGallery</div>,
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

describe("HomePage", () => {
  it("renders correctly", async () => {
    render(<HomePage />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Let's Find Some");
    expect(heading).toHaveTextContent("Art");
    expect(heading).toHaveTextContent("Here!");

    expect(screen.getByTestId("search-input")).toBeInTheDocument();
    expect(screen.getByTestId("special-gallery")).toBeInTheDocument();

    expect(screen.getByTestId("section-header")).toBeInTheDocument();
    expect(screen.getByText("Here some more")).toBeInTheDocument();
    expect(screen.getByText("Other works for you")).toBeInTheDocument();

    expect(screen.getByTestId("error-boundary")).toBeInTheDocument();
    expect(screen.getByTestId("random-gallery")).toBeInTheDocument();
  });
});
