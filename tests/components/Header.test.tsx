import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AppHeader } from "@components/Header";
import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme";

jest.mock("@components/Header/Menu.tsx", () => ({
  Menu: () => <div data-testid="menu">Menu</div>,
}));

jest.mock("@components/Header/LinkedLogo.tsx", () => ({
  LinkedLogo: ({
    img,
    link,
    alt,
  }: {
    img: string;
    link: string;
    alt: string;
  }) => (
    <a href={link}>
      <img src={img} alt={alt} />
    </a>
  ),
}));

describe("AppHeader", () => {
  it("renders LinkedLogo with correct props", () => {
    render(
      <ThemeProvider theme={theme}>
        <AppHeader />
      </ThemeProvider>,
    );

    expect(
      screen.getByAltText(
        "Logo of the museum, depicts an Ancient Greek temple facade and words - Museum of Art",
      ),
    ).toBeInTheDocument();
  });

  it("toggles menu visibility on button click", () => {
    render(
      <ThemeProvider theme={theme}>
        <AppHeader />
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByLabelText("Open or close menu"));

    expect(screen.getByTestId("menu")).toBeInTheDocument();
  });
});
