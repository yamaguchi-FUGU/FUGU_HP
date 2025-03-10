import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiNotionFill } from "react-icons/ri";
import styles from "./SNS.module.css";

type SNS = {
  icon: React.JSX.Element;
  link: string;
  title: string;
  detail: string;
};

export const SNS = () => {
  const SNSList: SNS[] = [
    {
      icon: <FaTwitter className={styles.sns_icon} />,
      link: "https://x.com/Y_vr_FUGU",
      title: "Twitter",
      detail: "最新情報・お問い合わせは</br>こちら",
    },
    {
      icon: <FaGithub className={styles.sns_icon} />,
      link: "https://github.com/yamaguchi-FUGU",
      title: "GitHub",
      detail: "開発コンテンツはこちら",
    },
    {
      icon: <RiNotionFill className={styles.sns_icon} />,
      link: "https://energetic-case-c23.notion.site/VR-FUGU-1591df40b1ae8086ba30e795e927752e",
      title: "Notion",
      detail: "詳しい情報はこちら",
    },
  ];

  const SNSPart = (sns: SNS) => {
    return (
      <div className={styles.sns_part}>
        <a
          href={sns.link}
          target="_blank"
          rel="noreferrer"
          className={styles.sns_link}
        >
          {sns.icon}
          <div className={styles.sns_title}>{sns.title}</div>
          <div
            className={styles.sns_detail}
            dangerouslySetInnerHTML={{ __html: sns.detail }}
          />
        </a>
      </div>
    );
  };
  return (
      <section id="sns" className={styles.sns_wrapper}>
        <h2>SNS</h2>
        <div className={styles.sns_container}>
          {SNSList.map((sns) => SNSPart(sns))}
        </div>
      </section>
  );
};
