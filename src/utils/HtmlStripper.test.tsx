import { render } from "@testing-library/react";
import DOMPurify from "dompurify";
import { SafeHtml } from "./HtmlStripper";

describe("SafeHtml", () => {
  it("should sanitize and parse HTML string", () => {
    const dirtyHtml = "<div onclick=\"alert('XSS')\">Click me</div>";
    const cleanHtml = "<div>Click me</div>";

    jest.spyOn(DOMPurify, "sanitize").mockImplementation((htmlString) => {
      const sanitizedHtml = (htmlString as string).replace(
        "onclick=\"alert('XSS')\"",
        "",
      );
      return sanitizedHtml as unknown as string;
    });

    const { container } = render(<>{SafeHtml(dirtyHtml)}</>);

    expect(container.innerHTML).toBe(cleanHtml);
  });

  it("should handle empty HTML strings", () => {
    const emptyHtml = "";

    const { container } = render(<>{SafeHtml(emptyHtml)}</>);

    expect(container.innerHTML).toBe("");
  });

  it("should handle HTML strings with valid content", () => {
    const validHtml = "<strong>Safe content</strong>";

    const { container } = render(<>{SafeHtml(validHtml)}</>);

    expect(container.innerHTML).toBe(validHtml);
  });
});
