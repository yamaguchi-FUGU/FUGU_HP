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
      <div className="googleslides-iframe-container">
        <iframe
          className="googleslides-iframe"
          title="自己紹介スライド"
          src="https://docs.google.com/presentation/d/e/2PACX-1vQYs9R-n7ryGBCydjHpLiSg5ERNMB2NlwOdKA5C6KAtg-KXLspwQTZIFrfiobqSpBY_Ip8n8fm59hnH/pubembed?start=true&loop=true&delayms=5000"
          frameBorder={0}
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};
