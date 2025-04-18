import { Cover } from "./Cover";
import { NotionUser } from "./NotionUser";
import { PageProperties } from "./PageProperties";

// ページの型
interface NotionPage {
  object: "page";
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: NotionUser;
  last_edited_by: NotionUser;
  cover: Cover | null;
  // eslint-disable-next-line
  icon: any | null;
  parent: {
    type: "database_id";
    database_id: string;
  };
  archived: boolean;
  in_trash: boolean;
  properties: PageProperties;
  url: string;
  public_url: string;
}

export type { NotionPage };
