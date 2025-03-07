import "./activities.css";
export const Activities = () => {
  const images = [
    { src: "/images/activity1.png", alt: "画像１" },
    { src: "/images/activity2.png", alt: "画像２" },
    { src: "/images/activity3.png", alt: "画像３" },
    { src: "/images/activity4.png", alt: "画像４" },
  ];

  return (
    <section id="activities" className="w-full">
      {/* メインヘッダー - "活動内容" */}
      <h2>活動内容</h2>

      {/* 週1開催の活動 */}
      <div className="activity-item">
        <div className="activity-header">
          <img
            src="/images/fugu.png"
            alt="フグアイコン"
            className="fugu-icon"
          />
          <h3 className="activity-title">週1開催：VRChat漫遊</h3>
        </div>
        <p className="activity-description">
          メンバーで一緒にVRChatのワールド巡りをして、わいわい楽しむ会
        </p>
      </div>

      {/* 月1開催の活動 */}
      <div className="activity-item">
        <div className="activity-header">
          <img
            src="/images/fugu.png"
            alt="フグアイコン"
            className="fugu-icon"
          />
          <h3 className="activity-title">
            月1開催：スキャンソン・VR体験会 or 勉強会(LT会)
          </h3>
        </div>
        <div className="activity-description">
          <p>リアルで集まってわいわい3Dスキャンをしようという会</p>
          <p>気軽に出来るオフ会、かつXR・テック系のイベントという立ち位置</p>
        </div>
      </div>

      {/* 画像グリッド - 4つのプレースホルダー画像 */}
      <div className="activity-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="activity-image-placeholder"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
};
