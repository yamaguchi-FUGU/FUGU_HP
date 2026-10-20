/**
 * Notion APIからイベント情報を取得するAPI（Cloudflare Pages Functions）
 */
export async function onRequestGet({ env }) {
  const NOTION_SECRET = env.INTEGRATION_SECRET;
  const NOTION_DB_ID = env.DB_ID;

  if (!NOTION_SECRET || !NOTION_DB_ID) {
    return Response.json({ error: "Missing Notion credentials" }, { status: 500 });
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
      return Response.json(errorData, { status: notionRes.status });
    }

    const data = await notionRes.json();
    return Response.json(data);
  } catch (err) {
    console.error("Server Error:", err);
    return Response.json(
      {
        error: "Internal Server Error",
        details: err instanceof Error ? err.message : String(err),
      },
      { status: 500 }
    );
  }
}
