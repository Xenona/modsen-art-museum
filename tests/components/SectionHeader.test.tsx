import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SectionHeader } from "@components/SectionHeader";
import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme";

jest.mock("@components/SectionHeader/styles.ts", () => ({
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

    render(
      <ThemeProvider theme={theme}>
        <SectionHeader topText={topText} bottomText={bottomText} />
      </ThemeProvider>,
    );

    expect(screen.getByRole("heading", { level: 4 })).toHaveTextContent(
      topText,
    );

    expect(screen.getByTestId("bottom-text")).toHaveTextContent(bottomText);
  });

  it("uses the correct components for styling", () => {
    render(
      <ThemeProvider theme={theme}>
        <SectionHeader topText="Test" bottomText="Test" />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("header-group")).toBeInTheDocument();

    expect(screen.getByTestId("bottom-text")).toBeInTheDocument();
  });
});
