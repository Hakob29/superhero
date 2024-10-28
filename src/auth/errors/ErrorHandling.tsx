import { useDispatch, useSelector } from "react-redux";
import styles from "./ErrorHandling.module.css";
import { Rootstate } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { resetUserError } from "../../store/slices/user/userSlice";
import { resetHeroError } from "../../store/slices/hero/heroSlice";

const ErrorHandling = () => {
  const userErrorMessage = useSelector((state: Rootstate) => state.user.error);
  const heroErrorMessage = useSelector((state: Rootstate) => state.hero.error);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //close error window
  const quitFromErrorHandling = () => {
    userErrorMessage ? dispatch(resetUserError()) : dispatch(resetHeroError());
    navigate(-1);
  };

  return (
    <div className={styles.error__div}>
      <div className={styles.btn__close}>
        <button onClick={quitFromErrorHandling}>x</button>
      </div>
      <ion-icon name="construct-outline"></ion-icon>
      <h1 className={styles.err__message}>
        {userErrorMessage || heroErrorMessage}
      </h1>
    </div>
  );
};

export default ErrorHandling;
