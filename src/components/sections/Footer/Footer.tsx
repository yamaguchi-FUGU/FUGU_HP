import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div>FUGU &copy;{new Date() .getFullYear()}</div>
    </footer>
  );
};
