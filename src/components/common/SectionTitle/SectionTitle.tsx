import styles from "./SectionTitle.module.css";

interface Props {
  children: React.ReactNode;
}

export const SectionTitle = (props: Props) => {
  return (
    <div className={styles.title}>
      {props.children}
    </div>
  );
};
