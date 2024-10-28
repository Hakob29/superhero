import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Home: React.FC = () => {
  const isAuth = useAuth().isAuth;

  return (
    <div className={styles.home__div}>
      <h1 className={styles.title}>Welcome to Superhero Universe!</h1>
      <p className={styles.information}>
        Your ultimate destination for all things superhero. Discover detailed
        profiles of iconic heroes, stay updated on comics and movies, and join
        our vibrant fan community. Explore interactive maps of epic battles and
        shop exclusive superhero merchandise. Dive in and celebrate the world of
        superheroes with us!
      </p>
      <Link to={isAuth ? "/search-page" : "/auth/sign-up"}>
        <ion-icon
          className={styles.icon}
          name="chevron-forward-outline"
        ></ion-icon>
        <p>Let's get started...</p>
      </Link>
    </div>
  );
};

export default Home;

// const [inputVisable, setInputVisable] = useState(false);
// const searchRef = React.useRef<HTMLInputElement>(null);

// const onButtonHandler = (): void => {
//   setInputVisable(!inputVisable);
// };

// const onSearchBtnHandler = (event: React.FormEvent) => {
//   try {
//     event.preventDefault();
//     const data = searchRef.current?.value;
//     const token = process.env.REACT_APP_ACCESS_TOKEN;
//     const result = fetch(`/api/${token}/search/${data}`)
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         return data;
//       });

//     if (searchRef.current?.value) {
//       searchRef.current.value = "";
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

//-------------------------

// <div className={styles.welcome__div}>
// <img
//   src="https://freepngimg.com/thumb/hero/150256-hero-free-download-image.png"
//   alt="hero__logo"
// />
// <button className={styles.started__btn} onClick={onButtonHandler}>
//   Let's <span>Started</span>!
// </button>
// <form className={styles.welcome__form} onSubmit={onSearchBtnHandler}>
//   {inputVisable ? (
//     <div className={styles.search__div}>
//       <input
//         className={styles.search__input}
//         type="text"
//         placeholder="Search your superhero here..."
//         ref={searchRef}
//       />
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth="1.5"
//         stroke="currentColor"
//         className={styles.search__icon}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
//         />
//       </svg>
//     </div>
//   ) : (
//     ""
//   )}
// </form>
// </div>
