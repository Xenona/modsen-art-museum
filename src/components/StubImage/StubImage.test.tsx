import { render, screen } from "@testing-library/react";
import { StubImage } from ".";
import React from "react";
global.React = React;

jest.mock("@assets/icons/greek_facade.svg", () => "mocked_greek_facade.svg");

describe("StubImage", () => {
  it("renders the placeholder image when condition is false", () => {
    render(
      <StubImage condition={false}>
        <span>Child Content</span>
      </StubImage>,
    );

    const imgElement = screen.getByAltText("Yellow Ancient Greek facade");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", "mocked_greek_facade.svg");
  });

  it("renders children when condition is true", () => {
    render(
      <StubImage condition={true}>
        <span>Child Content</span>
      </StubImage>,
    );

    const childElement = screen.getByText("Child Content");
    expect(childElement).toBeInTheDocument();
  });
});
