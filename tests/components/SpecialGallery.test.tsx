import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SpecialGallery } from "@components/SpecialGallery";
import { theme } from "@styles/theme";
import { ThemeProvider } from "styled-components";

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

jest.mock("@components/SpecialGallery/ArtworkContainer.tsx", () => ({
  ArtworkContainer: ({
    page,
    sortingId,
  }: {
    page: number;
    sortingId: number;
  }) => (
    <div data-testid="artwork-container">
      ArtworkContainer - Page: {page}, Sorting ID: {sortingId}
    </div>
  ),
  sortingInfo: [
    { type: "Title (A-Z)", cb: () => 0 },
    { type: "Title (Z-A)", cb: () => 0 },
    { type: "Date (min-max)", cb: () => 0 },
    { type: "Date (max-min)", cb: () => 0 },
  ],
}));

jest.mock("@components/skeletons/SpecialGallerySkeleton", () => ({
  SpecialGallerySkeleton: () => (
    <div data-testid="special-gallery-skeleton">SpecialGallerySkeleton</div>
  ),
}));

jest.mock("@components/skeletons/PaginatorSkeleton", () => ({
  PaginatorSkeleton: () => (
    <div data-testid="paginator-skeleton">PaginatorSkeleton</div>
  ),
}));

jest.mock("@components/ErrorBoundary", () => ({
  ErrorBoundary: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="error-boundary">{children}</div>
  ),
}));

jest.mock("@components/Paginator", () => ({
  Paginator: ({
    currPage,
    setCurrPage,
  }: {
    currPage: number;
    setCurrPage: (page: number) => void;
  }) => (
    <div data-testid="paginator">
      Paginator - Current Page: {currPage}
      <button onClick={() => setCurrPage(currPage + 1)}>Next Page</button>
    </div>
  ),
}));

describe("SpecialGallery", () => {
  it("renders section header and other components", () => {
    render(
      <ThemeProvider theme={theme}>
        <SpecialGallery />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("section-header")).toBeInTheDocument();
    expect(screen.getByText("Topics for you")).toBeInTheDocument();
    expect(screen.getByText("Our special gallery")).toBeInTheDocument();
  });

  it("handles sorting functionality correctly", async () => {
    render(
      <ThemeProvider theme={theme}>
        <SpecialGallery />
      </ThemeProvider>,
    );

    expect(screen.getByText("Title (A-Z)")).toBeInTheDocument();

    fireEvent.click(screen.getByLabelText("Next"));

    await waitFor(() => {
      expect(screen.getByText("Title (Z-A)")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByLabelText("Next"));

    await waitFor(() => {
      expect(screen.getByText("Date (min-max)")).toBeInTheDocument();
    });
  });

  it('updates the page number in Paginator when clicking "Next Page"', async () => {
    render(
      <ThemeProvider theme={theme}>
        <SpecialGallery />
      </ThemeProvider>,
    );
    expect(screen.getByTestId("paginator")).toHaveTextContent(
      "Current Page: 1",
    );

    fireEvent.click(screen.getByText("Next Page"));

    await waitFor(() => {
      expect(screen.getByTestId("paginator")).toHaveTextContent(
        "Current Page: 2",
      );
    });
  });
});
