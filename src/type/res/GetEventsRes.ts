import { NotionPage } from "../NotionPage";

// データベース結果のリスト型
interface GetEventsRes {
  object: "list";
  results: NotionPage[];
  next_cursor: string | null;
  has_more: boolean;
  type: "page_or_database";
  // eslint-disable-next-line
  page_or_database: Record<string, any>;
  request_id: string;
}

export type { GetEventsRes };
