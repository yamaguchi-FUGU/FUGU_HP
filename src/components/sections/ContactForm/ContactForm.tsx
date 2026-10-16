import { FaDiscord } from "react-icons/fa";
import styles from "./ContactForm.module.css";

export const ContactForm = () => {
  return (
    <section id="contact" className={styles.contact_wrapper}>
      <div>
        <div className={styles.message}>一緒に山口県のVR・メタバースを盛り上げていきませんか？</div>
        <div className={styles.message}>ご参加お待ちしてます！</div>
      </div>
      <div className={styles.button_group}>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSd0OpMA5abBBNZe23VP0VNttOLtKtH9xeZi8fVd11lrkYBS6A/viewform"
          target="_blank"
          className={styles.contact_button}
        >
          入部フォーム
        </a>
        <div className={styles.discord_container}>
          <div className={styles.discord_label}>様子見・相談はこちらから↓</div>
          <a
            href="https://discord.gg/mDnsFex66Z"
            target="_blank"
            rel="noreferrer"
            className={styles.discord_button}
          >
            <FaDiscord className={styles.discord_icon} />
            Discord参加
          </a>
        </div>
      </div>
    </section>
  );
};
