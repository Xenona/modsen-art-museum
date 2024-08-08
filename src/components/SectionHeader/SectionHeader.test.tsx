import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SectionHeader } from ".";

jest.mock("./styles", () => ({
  HeaderGroup: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="header-group">{children}</div>
  ),
  BottomText: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="bottom-text">{children}</div>
  ),
}));

describe("SectionHeader", () => {
  it("renders topText and bottomText correctly", () => {
    const topText = "Top Header";
    const bottomText = "Bottom Text";

    render(<SectionHeader topText={topText} bottomText={bottomText} />);

    expect(screen.getByRole("heading", { level: 4 })).toHaveTextContent(
      topText,
    );

    expect(screen.getByTestId("bottom-text")).toHaveTextContent(bottomText);
  });

  it("uses the correct components for styling", () => {
    render(<SectionHeader topText="Test" bottomText="Test" />);

    expect(screen.getByTestId("header-group")).toBeInTheDocument();

    expect(screen.getByTestId("bottom-text")).toBeInTheDocument();
  });
});
