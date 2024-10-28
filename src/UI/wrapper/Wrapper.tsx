import Props from "./Wrapper.interface";
import styles from "./Wrapper.module.css";

const Wrapper: React.FC<Props> = (props) => {
  return <div className={styles.wrapper__div}>{props.children}</div>;
};

export default Wrapper;
