import "./activities.css";
export const Activities = () => {
  return (
    <section id="activities" className="w-full">
      {/* Main Header - "活動内容" (Activity Contents) */}
      <h2>活動内容</h2>

      {/* Weekly Activity */}
      <div className="activity-item">
        <div className="activity-header">
          <div className="activity-icon">
            <div className="activity-icon-inner">🌐</div>
          </div>
          <h3 className="activity-title">週1開催：VRChat漫遊</h3>
        </div>
        <p className="activity-description">
          メンバーで一緒にVRChatのワールド巡りをして、わいわい楽しむ会
        </p>
      </div>

      {/* Monthly Activity */}
      <div className="activity-item">
        <div className="activity-header">
          <div className="activity-icon">
            <div className="activity-icon-inner">🌐</div>
          </div>
          <h3 className="activity-title">
            月1開催：スキャンソン・VR体験会 or 勉強会(LT会)
          </h3>
        </div>
        <div className="activity-description">
          <p>リアルで集まってわいわい3Dスキャンをしようという会</p>
          <p>気軽に出来るオフ会、かつXR・テック系のイベントという立ち位置</p>
        </div>
      </div>

      {/* Image Grid - 4 placeholder images */}
      <div className="activity-images">
        <img
          src="/images/activity1.png"
          alt="画像１"
          className="activity-image-placeholder"
        />
        <img
          src="/images/activity2.png"
          alt="画像２"
          className="activity-image-placeholder"
          loading="lazy"
        />
        <img
          src="/images/activity3.png"
          alt="画像３"
          className="activity-image-placeholder"
          loading="lazy"
        />
        <img
          src="/images/activity4.png"
          alt="画像４"
          className="activity-image-placeholder"
          loading="lazy"
        />
      </div>
    </section>
  );
};
