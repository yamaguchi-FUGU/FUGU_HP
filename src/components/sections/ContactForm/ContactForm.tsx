import styles from "./ContactForm.module.css";

export const ContactForm = () => {
  return (
    <section id="contact" className={styles.contact_wrapper}>
      <div>一緒に山口県のVR・メタバースを盛り上げていきませんか？</div>
      <div>ご参加お待ちしてます！</div>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSd0OpMA5abBBNZe23VP0VNttOLtKtH9xeZi8fVd11lrkYBS6A/viewform"
        target="_blank"
        className={styles.contact_button}
      >
        入部フォーム
      </a>
    </section>
  );
};
