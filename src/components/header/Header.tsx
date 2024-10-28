import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "../../UI/container/Container";
import styles from "./Header.module.css";
import useAuth from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { getHero, removeHero } from "../../store/slices/hero/heroSlice";
import React from "react";
import { logout } from "../../store/slices/user/userSlice";
import { AppDispatch } from "../../store/store";

const Header: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const mainPageURL = useLocation().pathname.slice(1, 10) === "main-page";

  //Search hero from /header
  const onSearchInputHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    const inputData = inputRef.current?.value;
    inputRef.current!.value = "";

    dispatch(removeHero());
    const result = await dispatch(getHero(inputData!));
    !result.payload ? navigate("/error") : navigate("/main-page/powerstats/1");
  };

  //logout
  const logOut = () => {
    dispatch(removeHero());
    dispatch(logout());
    navigate("/");
  };

  return (
    <Container>
      <header className={styles.header__div}>
        <div className={styles.header__div1}>
          <Link to="/">
            Super<span>Hero.</span>
          </Link>
        </div>
        <div className={styles.login__div}>
          {auth.isAuth ? (
            <div className={styles.header__form_div}>
              {mainPageURL ? (
                <form
                  className={styles.form__search}
                  onSubmit={onSearchInputHandler}
                >
                  <input
                    type="text"
                    placeholder="Search your superhero here..."
                    ref={inputRef}
                    className={styles.header__inpt}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={styles.search__icon}
                    onClick={onSearchInputHandler}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </form>
              ) : (
                ""
              )}

              <Link onClick={logOut} to="/" className={styles.logout}>
                Log out
              </Link>
            </div>
          ) : (
            <div>
              <Link to="/auth/log-in">Log in</Link>
              <Link to="/auth/sign-up">Sign up</Link>
            </div>
          )}
        </div>
      </header>
    </Container>
  );
};

export default Header;
