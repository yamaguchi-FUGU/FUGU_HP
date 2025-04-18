import "./About.css";

export const About = () => {
  return (
    <section id="about">
      <div className="about-section">
        <h2 className="about-title">山口VRサークル "FUGU"とは？</h2>

        <div className="about-info">
          <div className="info-item">
            <span className="info-label">正式名称：</span>
            <span>山口VRサークル Fulldive Universal Gateway Unit</span>
          </div>

          <div className="info-item">
            <span className="info-label">掲げるミッション：</span>
            <span>「バーチャル山口を創造する」</span>
          </div>

          <div className="info-item">
            <span className="info-label">活動目的：</span>
            <span>山口県にVRとバーチャルの世界を広げる</span>
          </div>

          <p className="about-description">
            ものづくり・VRでわいわいしながら、その輪を広げたいという思いで活動しています
          </p>

          <a
            href="https://note.com/tolpaz/n/nca2ff75c6f78?sub_rt=share_sb"
            target="_blank"
            rel="noopener noreferrer"
            className="note-link"
          >
            創設者の思い(note記事)
          </a>
        </div>
      </div>
      <div className="speakerdeck-iframe-container">
        <iframe
          className="speakerdeck-iframe"
          frameBorder={0}
          src="https://speakerdeck.com/player/3a8b9736fe994ca0b4eec13627b3dd94"
          title="アップロードテスト"
          allowFullScreen
          data-ratio="1.7777777777777777"
        ></iframe>
      </div>
    </section>
  );
};
