import { useEffect, useState } from "react";
import styles from "./MainVisual.module.css";

export const MainVisual = () => {
  const images = ["images/img1.png", "images/img2.png", "images/img3.png"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length, index]);

  return (
    <section id="main-visual">
      <div className={styles.container}>
        {/* テキスト */}
        <div className={styles.text_wrapper}>
          <div className={styles.text}>バーチャル山口を<br/>創造する</div>
        </div>
        {/* スライドショー */}
        <div
          className={styles.img_wrapper}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((image, i) => (
            <img key={i} src={image} alt="VRCの画像" className={styles.img} />
          ))}
        </div>
        {/* スライドショー下のボタン */}
        <div className={styles.button_wrapper}>
          {images.map((_, i) => (
            <button
              key={i}
              className={`${styles.button} ${i === index ? styles.active : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
