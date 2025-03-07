import React from "react";
import "./achievements.css";

export const Achievements = () => {
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

        {/* Twitter widget script - This needs to be included once in your app, typically in index.html */}
        {React.useEffect(() => {
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

          // Cleanup on component unmount
          return () => {
            // Optional: remove the script on unmount if needed
          };
        }, [])}
      </div>
    </section>
  );
};
