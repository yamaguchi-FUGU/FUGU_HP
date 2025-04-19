import { RichTextElement } from "./RichTextElement";

// タイトルプロパティの型
interface TitleProperty {
  id: string;
  type: "title";
  title: RichTextElement[];
}

export type { TitleProperty };
