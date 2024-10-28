import React from "react";
import styles from "./Log-in.module.css";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../pages/loading/Loading";
import UserLoginInterface from "./Log-in.interface";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, Rootstate } from "../../store/store";
import { login } from "../../store/slices/user/userSlice";
import ErrorHandling from "../errors/ErrorHandling";

const Login: React.FC = () => {
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector((state: Rootstate) => state.user.status);
  const navigate = useNavigate();

  //Listen to login button
  const loginButtonHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    const data: UserLoginInterface = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      token: true,
    };

    const result = await dispatch(login(data));
    !result.payload ? navigate("/error") : navigate("/search-page");
  };

  return (
    <>
      {status === "rejected" ? (
        <ErrorHandling />
      ) : (
        <div className={styles.login__div}>
          {status === "loading" ? (
            <Loading />
          ) : (
            <form onSubmit={loginButtonHandler}>
              <Link to="/" className={styles.close__link}>
                x
              </Link>
              <h1>Log in</h1>
              <label>
                <ion-icon name="person-outline"></ion-icon>
                Email
              </label>
              <input ref={emailRef} type="email" />
              <label>
                <ion-icon name="lock-closed-outline"></ion-icon>
                Password
              </label>
              <input ref={passwordRef} type="password" />
              <button className={styles.login__btn}>LOG IN</button>
              <div className={styles.login}>
                <p>Don't have an account?</p>
                <Link to="/auth/sign-up">Sign up</Link>
              </div>
            </form>
          )}
        </div>
      )}
    </>
  );
};

export default Login;
