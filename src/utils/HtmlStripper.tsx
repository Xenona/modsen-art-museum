import React from "react";

export const sanitizeHtml = (htmlString: string): HTMLElement | null => {
  const allowedTags = ["P", "I"];

  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlString;

  const filterElement = (element: Node) => {
    if (element.nodeType === Node.ELEMENT_NODE) {
      const el = element as HTMLElement;
      if (!allowedTags.includes(el.nodeName)) {
        el.parentNode?.removeChild(el);
      } else {
        Array.from(el.childNodes).forEach(filterElement);
      }
    }
  };

  Array.from(tempDiv.childNodes).forEach(filterElement);

  return tempDiv.childNodes.length > 0 ? tempDiv : null;
};

export const convertToReactNode = (domNode: Node): React.ReactNode => {
  if (domNode.nodeType === Node.TEXT_NODE) {
    return (domNode as Text).textContent || "";
  }

  if (domNode.nodeType === Node.ELEMENT_NODE) {
    const el = domNode as HTMLElement;
    const { nodeName } = el;
    const children = Array.from(el.childNodes).map(convertToReactNode);

    switch (nodeName) {
      case "P":
        return <p key={Math.random()}>{children}</p>;
      case "I":
        return <i key={Math.random()}>{children}</i>;
      default:
        return null;
    }
  }

  return null;
};

export const SafeHtml = (htmlString: string): React.ReactNode => {
  const sanitizedDom = sanitizeHtml(htmlString);
  if (!sanitizedDom) return null;

  return Array.from(sanitizedDom.childNodes).map(convertToReactNode);
};
