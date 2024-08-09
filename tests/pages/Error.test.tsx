import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Error } from "../../src/pages/Error";

jest.mock("@pages/home/styled", () => ({
  Main: ({ children }: { children: React.ReactNode }) => (
    <main>{children}</main>
  ),
  StyledH1: ({ children }: { children: React.ReactNode }) => (
    <h1>{children}</h1>
  ),
}));

describe("Error", () => {
  it("renders children correctly", () => {
    render(<Error>Test Error Message</Error>);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Test Error Message",
    );
  });
});
