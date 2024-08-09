import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AppHeader } from ".";

jest.mock("./Menu", () => ({
  Menu: () => <div data-testid="menu">Menu</div>,
}));

jest.mock("./LinkedLogo", () => ({
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
    render(<AppHeader />);

    expect(
      screen.getByAltText(
        "Logo of the museum, depicts an Ancient Greek temple facade and words - Museum of Art",
      ),
    ).toBeInTheDocument();
  });

  it("toggles menu visibility on button click", () => {
    render(<AppHeader />);

    fireEvent.click(screen.getByLabelText("Open or close menu"));

    expect(screen.getByTestId("menu")).toBeInTheDocument();
  });
});
