import { CreatedTimeProperty } from "./CreatedTimeProperty";
import { DateProperty } from "./DateProperty";
import { MultiSelectProperty } from "./MultiSelectProperty";
import { TitleProperty } from "./TitleProperty";

// ページのプロパティ型
interface PageProperties {
  タグ: MultiSelectProperty;
  開催日: DateProperty;
  作成日時: CreatedTimeProperty;
  名前: TitleProperty;
  // eslint-disable-next-line
  [key: string]: any; // その他のプロパティがある場合
}

export type { PageProperties };
