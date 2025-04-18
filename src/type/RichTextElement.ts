import { TextAnnotations } from "./TextAnnotations";
import { TextContent } from "./TextContent";

// リッチテキスト要素の型
interface RichTextElement {
  type: "text";
  text: TextContent;
  annotations: TextAnnotations;
  plain_text: string;
  href: string | null;
}

export type { RichTextElement };
