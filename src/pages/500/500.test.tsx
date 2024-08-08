import { render, screen } from "@testing-library/react";
import { ServerError } from ".";

describe("ServerError", () => {
  it("renders correctly", () => {
    render(<ServerError />);

    const spanElement = screen.getByText("500");
    expect(spanElement).toBeTruthy();

    const messageElement = screen.getByText("— something wrong has happened!");
    expect(messageElement).toBeTruthy();
  });
});
