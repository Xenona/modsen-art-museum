import { render, screen } from "@testing-library/react";
import { StubImage } from "../../src/components/StubImage";
import { theme } from "@styles/theme";
import { ThemeProvider } from "styled-components";

jest.mock("@assets/icons/greek_facade.svg", () => "mocked_greek_facade.svg");

describe("StubImage", () => {
  it("renders the placeholder image when condition is false", () => {
    render(
      <ThemeProvider theme={theme}>
        <StubImage condition={false}>
          <span>Child Content</span>
        </StubImage>
      </ThemeProvider>,
    );

    const imgElement = screen.getByAltText("Yellow Ancient Greek facade");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", "mocked_greek_facade.svg");
  });

  it("renders children when condition is true", () => {
    render(
      <ThemeProvider theme={theme}>
        <StubImage condition={true}>
          <span>Child Content</span>
        </StubImage>
      </ThemeProvider>,
    );

    const childElement = screen.getByText("Child Content");
    expect(childElement).toBeInTheDocument();
  });
});
