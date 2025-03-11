import { useEffect } from "react";
import "./achievements.css";

declare global {
  interface Window {
    twttr: {
      widgets: {
        load: () => void;
      };
    };
  }
}

export const Achievements = () => {
  useEffect(() => {
    // Check if Twitter widget script already exists
    if (!window.twttr) {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.charset = "utf-8";
      document.body.appendChild(script);
    } else {
      // If script exists, reload widgets
      window.twttr.widgets.load();
    }
  }, []);

  return (
    <section id="achievements" className="achievements-section">
      {/* Heading */}
      <h2 className="achievements-heading">活動実績</h2>

      {/* Twitter Timeline */}
      <div className="achievements-timeline">
        {/* Twitter Timeline Widget */}
        <a
          className="twitter-timeline"
          data-height="600"
          data-theme="light"
          data-lang="ja"
          href="https://twitter.com/Y_vr_FUGU"
        >
          @Y_vr_FUGUのツイート
        </a>
      </div>
    </section>
  );
};
