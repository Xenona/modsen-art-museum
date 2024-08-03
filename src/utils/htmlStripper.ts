import DOMPurify from "dompurify";
import parse from "html-react-parser";

export function SafeHtml(htmlString: string) {
  const cleanHtmlString = DOMPurify.sanitize(htmlString);

  const htmlContent = parse(cleanHtmlString);

  return htmlContent;
}
