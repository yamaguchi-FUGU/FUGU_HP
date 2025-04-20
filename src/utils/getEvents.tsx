import { GetEventsRes } from "../type/res/GetEventsRes";

// Notion DBからイベント情報を取得する関数（API経由）
export async function getEvents(): Promise<GetEventsRes | null> {
  try {
    const res = await fetch("/api/events");
    
    if (!res.ok) {
      const errorData = await res.json();
      console.error("API Error:", errorData);
      throw new Error(`Failed to fetch events: ${res.statusText}`);
    }
    
    return await res.json();
  } catch (error) {
    console.error("Error fetching events:", error);
    return null;
  }
}
