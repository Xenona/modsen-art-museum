import { render, screen } from "@testing-library/react";
import { ServerError } from "../../src/pages/500";
import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme";

describe("ServerError", () => {
  it("renders correctly", () => {
    render(
      <ThemeProvider theme={theme}>
        <ServerError />
      </ThemeProvider>,
    );

    const spanElement = screen.getByText("500");
    expect(spanElement).toBeTruthy();

    const messageElement = screen.getByText("— something wrong has happened!");
    expect(messageElement).toBeTruthy();
  });
});
