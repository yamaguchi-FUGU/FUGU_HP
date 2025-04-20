/**
 * Notion APIからイベント情報を取得するAPI
 */
export default async function handler(req, res) {
  const NOTION_SECRET = process.env.INTEGRATION_SECRET;
  const NOTION_DB_ID = process.env.DB_ID;

  if (!NOTION_SECRET || !NOTION_DB_ID) {
    return res.status(500).json({ error: "Missing Notion credentials" });
  }

  try {
    const notionRes = await fetch(
      `https://api.notion.com/v1/databases/${NOTION_DB_ID}/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${NOTION_SECRET}`,
          "Content-Type": "application/json",
          "Notion-Version": "2022-06-28",
        },
        body: JSON.stringify({}),
      }
    );

    if (!notionRes.ok) {
      const errorData = await notionRes.json();
      console.error("Notion API Error:", errorData);
      return res.status(notionRes.status).json(errorData);
    }

    const data = await notionRes.json();
    return res.status(200).json(data);
  } catch (err) {
    console.error("Server Error:", err);
    return res.status(500).json({
      error: "Internal Server Error",
      details: err instanceof Error ? err.message : String(err),
    });
  }
}
