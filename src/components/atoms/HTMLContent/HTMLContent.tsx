import { Parser } from "html-to-react";
import DOMPurify from "dompurify";

interface HTMLContentProps {
  content: string;
}

const HTMLContent = ({ content }: HTMLContentProps) => {
  const parser = new Parser();
  const sanitizedContent = DOMPurify.sanitize(content, {
    USE_PROFILES: { html: true },
  });

  return <>{parser.parse(sanitizedContent)};</>;
};

export default HTMLContent;
