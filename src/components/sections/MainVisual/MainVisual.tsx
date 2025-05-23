import { useEffect, useState } from "react";
import styles from "./MainVisual.module.css";

export const MainVisual = () => {
  const basePath = 'images/main_visual/';
  const Images = [
    {
      pc: `${basePath}pc_1.png`,
      sp: `${basePath}sp_1.png`,
    },
    {
      pc: `${basePath}pc_2.png`,
      sp: `${basePath}sp_2.png`,
    },
    {
      pc: `${basePath}pc_3.png`,
      sp: `${basePath}sp_3.png`,
    },
  ]

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % Images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [Images.length, index]);

  return (
    <section id="main-visual">
      <div className={styles.container}>
        {/* テキスト */}
        <div className={styles.text_wrapper}>
          <div className={styles.text}>
            バーチャル山口を
            <br />
            創造する
          </div>
        </div>
        {/* スライドショー */}
        <div className={styles.slider}>
          <div
            className={styles.img_wrapper}
            style={{
              transform: `translateX(-${index * 100}vw)`,
              width: `${Images.length * 100}vw`,
            }}
          >
            {Images.map((image, i) => (
              <picture key={i}>
                <source media="(max-width: 767px)" srcSet={image.sp} className={styles.img} />
                <img src={image.pc} alt="VRCの画像" className={styles.img} />
              </picture>
            ))}
          </div>
        </div>
        {/* スライドショー下のボタン */}
        <div className={styles.button_wrapper}>
          {Images.map((_, i) => (
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
