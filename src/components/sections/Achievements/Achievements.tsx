import { useEffect, useState } from "react";
import "./achievements.css";
import { SectionTitle } from "../../common/SectionTitle/SectionTitle";
import { FaChevronRight } from "react-icons/fa";
import { getEvents } from "../../../utils/getEvents";
import { NotionPage } from "../../../type/NotionPage";
import { GetEventsRes } from "../../../type/res/GetEventsRes";

// 表示するイベントの最大数
const MAX_EVENTS = 7;
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

      <div className="achievements-container">
        <div className="events_container">
          {events &&
            events.slice(0, MAX_EVENTS).map((event: NotionPage) => (
              <a
                key={event.id}
                target="_blank"
                href={event.public_url}
                className="event"
              >
                <img
                  src={
                    event.cover?.type === "file"
                      ? event.cover.file.url
                      : event.cover?.external.url
                  }
                />
                <div>
                  <div className="event_date">
                    {event.properties.開催日.date.start}
                  </div>
                  <div className="event_name">
                    {event.properties.名前.title[0].plain_text}
                  </div>
                </div>
              </a>
            ))}
          <a
            className="event_button"
            href="https://energetic-case-c23.notion.site/VR-FUGU-1591df40b1ae8086ba30e795e927752e"
            target="_blank"
          >
            <FaChevronRight size={40} color="rgb(0.1, 0.1, 0.1)" />
            <div className="event_button_text">もっと見る</div>
          </a>
        </div>

        <div className="timeline-container">
          {/* 挙動が不安定だったので一旦コメントアウト
        <div className="spinner-wrapper">
          <div className="spinner"></div>
        </div> */}

          {/* Twitter Timeline */}
          <div className="timeline">
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
      </div>
    </section>
  );
};
