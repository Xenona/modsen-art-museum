import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Footer } from ".";

jest.mock("@components/Header/LinkedLogo", () => ({
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

describe("Footer", () => {
  it("renders LinkedLogo components with correct props", () => {
    render(<Footer />);

    const museumLogoAltText =
      "Logo of the museum, depicts an Ancient Greek temple facade and words - Museum of Art";
    const modsenLogoAltText =
      "Logo of Modsen company. Deptics word 'MODSEN' with an orange hexagon joining M and O letters";

    expect(screen.getByAltText(museumLogoAltText)).toBeInTheDocument();
    expect(screen.getByAltText(modsenLogoAltText)).toBeInTheDocument();

    const museumLogoLink = screen.getByAltText(museumLogoAltText).closest("a");
    const modsenLogoLink = screen.getByAltText(modsenLogoAltText).closest("a");

    expect(museumLogoLink).toHaveAttribute("href", "/");
    expect(modsenLogoLink).toHaveAttribute(
      "href",
      "https://www.modsen-software.com",
    );
  });
});
