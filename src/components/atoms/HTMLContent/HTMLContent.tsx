import { Parser } from "html-to-react";
import DOMPurify from "dompurify";
import "./htmlContent.css";

interface HTMLContentProps {
  content: string;
}

const HTMLContent = ({ content }: HTMLContentProps) => {
  const parser = new Parser();
  const sanitizedContent = DOMPurify.sanitize(content, {
    USE_PROFILES: { html: true },
  });

  return (
    <div className="text-[11px] text-gray htmlContent">
      {parser.parse(sanitizedContent)}
    </div>
  );
};

export default HTMLContent;
