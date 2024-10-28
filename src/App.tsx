import styles from "./App.module.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Wrapper from "./UI/wrapper/Wrapper";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Wrapper classname={styles.wrapper__div}>
      <Header />
      <Main />
      <Footer />
    </Wrapper>
  );
}

export default App;
