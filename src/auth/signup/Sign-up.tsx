import React from "react";
import styles from "./Sign-up.module.css";
import { Link, useNavigate } from "react-router-dom";
import UserSignUpInterface from "./Sign-up.interface";
import { signup } from "../../store/slices/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, Rootstate } from "../../store/store";
import Loading from "../../pages/loading/Loading";
import ErrorHandling from "../errors/ErrorHandling";

const SignUp: React.FC = () => {
  const userNameRef = React.useRef<HTMLInputElement>(null);
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const status = useSelector((state: Rootstate) => state.user.status);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  //Data handling for sign-up
  const sendDataHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    const data: UserSignUpInterface = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      token: true,
    };

    await dispatch(signup(data));
    navigate("/search-page");
  };
  return (
    <>
      {status === "rejected" ? (
        <ErrorHandling />
      ) : (
        <div className={styles.signup__div}>
          {status === "loading" ? (
            <Loading />
          ) : (
            <form onSubmit={sendDataHandler}>
              <Link to="/" className={styles.close__link}>
                x
              </Link>
              <h1>Sign Up</h1>
              <label>
                <ion-icon name="person-outline"></ion-icon>
                Username
              </label>
              <input ref={userNameRef} type="text" />
              <label>
                <ion-icon name="mail-outline"></ion-icon>
                Email
              </label>
              <input ref={emailRef} type="email" />
              <label>
                <ion-icon name="lock-closed-outline"></ion-icon>
                Password
              </label>
              <input ref={passwordRef} type="password" />
              <button className={styles.signup__btn}>SIGN UP</button>
              <div className={styles.signup}>
                <p>Already have an account? </p>

                <Link to="/auth/log-in">Log in</Link>
              </div>
            </form>
          )}
        </div>
      )}
    </>
  );
};

export default SignUp;
