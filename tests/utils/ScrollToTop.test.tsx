import { render } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../../src/utils/ScrollToTop";
import { useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn(),
}));

describe("ScrollToTop", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useLocation as jest.Mock).mockReturnValue({ pathname: "/" });
    window.scrollTo = jest.fn();
  });

  it("should scroll to the top on initial render", () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            <Route path="/" element={<ScrollToTop />} />
          </Routes>
        </MemoryRouter>
      </ThemeProvider>,
    );

    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });

  it("should not scroll to the top if pathname does not change", () => {
    const { rerender } = render(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            <Route path="/" element={<ScrollToTop />} />
          </Routes>
        </MemoryRouter>
      </ThemeProvider>,
    );

    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);

    rerender(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            <Route path="/" element={<ScrollToTop />} />
          </Routes>
        </MemoryRouter>
      </ThemeProvider>,
    );

    expect(window.scrollTo).toHaveBeenCalledTimes(1);
  });
});
