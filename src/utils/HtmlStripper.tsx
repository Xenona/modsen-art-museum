function sanitize(doc: Element) {
  const allowedTags = ["p", "i"];

  for (const child of doc.children) {
    if (!allowedTags.includes(child.tagName.toLowerCase())) {
      child.replaceWith(document.createTextNode(child.textContent ?? ""));
    } else {
      sanitize(child);
    }
  }
}

function transformToReact(node: ChildNode) {
  if (node.nodeType === Node.TEXT_NODE) {
    return node.textContent;
  }

  if (node.nodeType === Node.ELEMENT_NODE) {
    const element = node as Element;
    const tagName = element.tagName.toLowerCase();

    const children = Array.from(element.childNodes).map((node) =>
      transformToReact(node),
    );

    if (tagName === "p") {
      return <p key={element.textContent}>{children}</p>;
    }

    if (tagName === "i") {
      return <i key={element.textContent}>{children}</i>;
    }
  }

  return null;
}

export function SafeHtml(htmlString: string) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  sanitize(doc.body);

  const reactElements = Array.from(doc.body.childNodes).map((node) =>
    transformToReact(node),
  );

  return <>{reactElements}</>;
}
