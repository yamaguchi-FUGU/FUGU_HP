import axios from "axios";
import { GetEventsRes } from "../type/res/getEventsRes";

const integration_secret = import.meta.env.VITE_INTEGRATION_SECRET;
const db_id = import.meta.env.VITE_DB_ID;

// Notion DBからイベント情報を取得する関数
export async function getEvents(): Promise<GetEventsRes | null> {
  try {
    const res = await axios({
      method: "post",
      url: `/api/v1/databases/${db_id}/query`,
      headers: {
        "Authorization": `Bearer ${integration_secret}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28",
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
