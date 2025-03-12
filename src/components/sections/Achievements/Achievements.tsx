import { useEffect } from "react";
import "./achievements.css";
import { SectionTitle } from "../../common/SectionTitle/SectionTitle";
import { FaChevronRight } from "react-icons/fa";

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
        {/* <div className="spinner-wrapper">
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
