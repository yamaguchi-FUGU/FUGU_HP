import { useEffect, useState } from "react";
import "./achievements.css";
import { SectionTitle } from "../../common/SectionTitle/SectionTitle";
import { FaChevronRight } from "react-icons/fa";
import { getEvents } from "../../../utils/getEvents";
import { NotionPage } from "../../../type/NotionPage";
import { GetEventsRes } from "../../../type/res/getEventsRes";

declare global {
  interface Window {
    twitter: {
      widgets: {
        load: () => void;
      };
    };
  }
}

export const Achievements = () => {
  // notionから取得したイベントリスト
  const [events, setEvents] = useState<NotionPage[] | null>(null);

  // イベントの取得
  useEffect(() => {
    getEvents().then((res: GetEventsRes | null) => {
      console.log(res);
      if (!res) return; 
      setEvents(res.results);
    });
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="achievements" className="achievements-section">
      <SectionTitle>活動実績</SectionTitle>

      {events && events.slice(0, 3).map((event: NotionPage) => (
        <a key={event.id} target="__brank" href={event.public_url} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <img  style={{ width: '200px' }} src={event.cover?.type === 'file' ? event.cover.file.url : event.cover?.external.url} />
          <div>{event.properties.名前.title[0].plain_text}</div>
        </a>
      ))}

      <div className="achievements-container">
        {/* 挙動が不安定だったので一旦コメントアウト
        <div className="spinner-wrapper">
          <div className="spinner"></div>
        </div> */}

        {/* Twitter Timeline */}
        <div className="achievements-timeline">
          <a
            className="twitter-timeline"
            data-height="600"
            data-theme="light"
            data-lang="ja"
            href="https://twitter.com/Y_vr_FUGU"
          >
            @Y_vr_FUGUのツイート
            <FaChevronRight />
          </a>
        </div>
      </div>
    </section>
  );
};
