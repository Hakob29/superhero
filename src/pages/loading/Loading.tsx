import styles from "./Loading.module.css";

const Loading: React.FC = () => {
  return (
    <div className={styles.loading__page}>
      <div className={styles.loading__div}></div>
    </div>
  );
};

export default Loading;
