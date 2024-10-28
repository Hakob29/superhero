import { Route, Routes } from "react-router-dom";
import Container from "../../UI/container/Container";
import Home from "../../pages/home/Home";
import styles from "./Main.module.css";
import SignUp from "../../auth/signup/Sign-up";
import Login from "../../auth/login/Log-in";
import SearchPage from "../../pages/search-page/Search-page";
import ErrorHandling from "../../auth/errors/ErrorHandling";
import GuardedRoute from "../../UI/guard/GuardedRoute";
import MainPage from "../../pages/main-page/Main-page";

const Main: React.FC = () => {
  return (
    <Container>
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/search-page"
            element={
              <GuardedRoute>
                <SearchPage />
              </GuardedRoute>
            }
          />
          <Route
            path="/main-page/*"
            element={
              <GuardedRoute>
                <MainPage />
              </GuardedRoute>
            }
          />
          <Route path="/auth/sign-up" element={<SignUp />} />
          <Route path="/auth/log-in" element={<Login />} />
          <Route path="/error" element={<ErrorHandling />} />
        </Routes>
      </main>
    </Container>
  );
};

export default Main;
