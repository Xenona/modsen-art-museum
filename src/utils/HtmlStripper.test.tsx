import { render } from "@testing-library/react";
import { convertToReactNode, SafeHtml, sanitizeHtml } from "./HtmlStripper";

describe("SafeHtml", () => {
  test("should render allowed tags", () => {
    const htmlString = `<p>Valid paragraph</p><i>Valid italic</i>`;
    const { container } = render(<>{SafeHtml(htmlString)}</>);

    expect(container.querySelector("p")).toBeInTheDocument();
    expect(container.querySelector("i")).toBeInTheDocument();
    expect(container.textContent).toContain("Valid paragraph");
    expect(container.textContent).toContain("Valid italic");
  });

  test("should not render disallowed tags", () => {
    const htmlString = `<div>Invalid div</div><span>Invalid span</span>`;
    const { container } = render(<>{SafeHtml(htmlString)}</>);

    expect(container.querySelector("div")).toBeNull();
    expect(container.querySelector("span")).toBeNull();
  });

  test("should handle nested allowed tags", () => {
    const htmlString = `<p>Paragraph with <i>italic</i> text</p>`;
    const { container } = render(<>{SafeHtml(htmlString)}</>);

    const pElement = container.querySelector("p");
    const iElement = container.querySelector("i");

    expect(pElement).toBeInTheDocument();
    expect(iElement).toBeInTheDocument();
    expect(pElement?.textContent).toContain("italic");
  });

  test("should handle text nodes correctly", () => {
    const htmlString = `<p>Paragraph with <i>italic</i> text</p><p>Another paragraph</p>`;
    const { container } = render(<>{SafeHtml(htmlString)}</>);

    expect(container.textContent).toContain("Paragraph with italic text");
    expect(container.textContent).toContain("Another paragraph");
  });

  test("should handle empty input", () => {
    const htmlString = ``;
    const { container } = render(<>{SafeHtml(htmlString)}</>);

    expect(container.textContent).toBe("");
  });

  test("should handle input with only disallowed tags", () => {
    const htmlString = `<script>alert('XSS');</script><style>body { color: red; }</style>`;
    const { container } = render(<>{SafeHtml(htmlString)}</>);

    expect(container.querySelector("script")).toBeNull();
    expect(container.querySelector("style")).toBeNull();
  });
});

describe("sanitizeHtml", () => {
  test("should retain allowed tags and their content", () => {
    const htmlString = `<p>Valid paragraph</p><i>Valid italic</i>`;
    const sanitizedDom = sanitizeHtml(htmlString);
    const container = document.createElement("div");
    if (sanitizedDom) {
      container.appendChild(sanitizedDom);
    }

    const pElement = container.querySelector("p");
    const iElement = container.querySelector("i");

    expect(pElement).not.toBeNull();
    expect(iElement).not.toBeNull();
    expect(container.textContent).toContain("Valid paragraph");
    expect(container.textContent).toContain("Valid italic");
  });

  test("should remove disallowed tags", () => {
    const htmlString = `<div>Invalid div</div><span>Invalid span</span>`;
    const sanitizedDom = sanitizeHtml(htmlString);
    const container = document.createElement("p");
    if (sanitizedDom) {
      container.appendChild(sanitizedDom);
    }

    console.log(container.innerHTML);
    expect(container.querySelector("div")).toBeNull();
    expect(container.querySelector("span")).toBeNull();
  });

  test("should handle nested allowed tags", () => {
    const htmlString = `<p>Paragraph with <i>italic</i> text</p>`;
    const sanitizedDom = sanitizeHtml(htmlString);
    const container = document.createElement("div");
    if (sanitizedDom) {
      container.appendChild(sanitizedDom);
    }

    const pElement = container.querySelector("p");
    const iElement = container.querySelector("i");

    expect(pElement).not.toBeNull();
    expect(iElement).not.toBeNull();
    expect(pElement?.textContent).toContain("italic");
  });

  test("should handle empty input", () => {
    const htmlString = ``;
    const sanitizedDom = sanitizeHtml(htmlString);
    const container = document.createElement("div");
    if (sanitizedDom) {
      container.appendChild(sanitizedDom);
    }

    expect(container.textContent).toBe("");
  });

  test("should handle input with only disallowed tags", () => {
    const htmlString = `<script>alert('XSS');</script><style>body { color: red; }</style>`;
    const sanitizedDom = sanitizeHtml(htmlString);
    const container = document.createElement("div");
    if (sanitizedDom) {
      container.appendChild(sanitizedDom);
    }

    expect(container.querySelector("script")).toBeNull();
    expect(container.querySelector("style")).toBeNull();
  });
});

describe("convertToReactNode", () => {
  test("should convert text nodes to React text", () => {
    const textNode = document.createTextNode("Some text");
    const reactNode = convertToReactNode(textNode);

    expect(reactNode).toBe("Some text");
  });

  test("should convert <p> element to React <p> element", () => {
    const pElement = document.createElement("p");
    pElement.textContent = "Paragraph text";
    const reactNode = convertToReactNode(pElement);

    const { container } = render(<>{reactNode}</>);
    const p = container.querySelector("p");

    expect(p).toBeInTheDocument();
    expect(p?.textContent).toBe("Paragraph text");
  });

  test("should convert <i> element to React <i> element", () => {
    const iElement = document.createElement("i");
    iElement.textContent = "Italic text";
    const reactNode = convertToReactNode(iElement);

    const { container } = render(<>{reactNode}</>);
    const i = container.querySelector("i");

    expect(i).toBeInTheDocument();
    expect(i?.textContent).toBe("Italic text");
  });

  test("should ignore disallowed tags", () => {
    const divElement = document.createElement("div");
    divElement.textContent = "Should be ignored";
    const reactNode = convertToReactNode(divElement);

    expect(reactNode).toBeNull();
  });

  test("should handle nested elements correctly", () => {
    const pElement = document.createElement("p");
    const iElement = document.createElement("i");
    iElement.textContent = "Italic text";
    pElement.textContent = "Paragraph with ";
    pElement.appendChild(iElement);

    const reactNode = convertToReactNode(pElement);

    const { container } = render(<>{reactNode}</>);
    const p = container.querySelector("p");
    const i = container.querySelector("i");

    expect(p).toBeInTheDocument();
    expect(i).toBeInTheDocument();
    expect(p?.textContent).toContain("Italic text");
  });

  test("should ignore disallowed tags", () => {
    const divElement = document.createElement("div");
    divElement.textContent = "Div text";
    const reactNode = convertToReactNode(divElement);
    expect(reactNode).toBeNull();
  });

  test("should handle non-element nodes", () => {
    const commentNode = document.createComment("This is a comment");
    const reactNode = convertToReactNode(commentNode);
    expect(reactNode).toBeNull();
  });

  test("should convert text nodes with content to React text nodes", () => {
    const textNode = document.createTextNode("Sample text");
    const reactNode = convertToReactNode(textNode);
    const { container } = render(<>{reactNode}</>);
    expect(container.textContent).toBe("Sample text");
  });

  test("should convert text nodes with empty content to an empty string", () => {
    const textNode = document.createTextNode("");
    const reactNode = convertToReactNode(textNode);
    const { container } = render(<>{reactNode}</>);
    expect(container.textContent).toBe("");
  });
});
