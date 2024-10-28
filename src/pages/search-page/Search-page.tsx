import React from "react";
import styles from "./Search-page.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getHero, removeHero } from "../../store/slices/hero/heroSlice";
import { useNavigate } from "react-router-dom";
import { AppDispatch, Rootstate } from "../../store/store";
import Loading from "../loading/Loading";
import ErrorHandling from "../../auth/errors/ErrorHandling";

const SearchPage: React.FC = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const status = useSelector((state: Rootstate) => state.hero.status);

  //Search hero from /search-page
  const onSearchInputHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    const inputData = inputRef.current?.value;

    dispatch(removeHero());
    const result = await dispatch(getHero(inputData!));
    !result.payload ? navigate("/error") : navigate("/main-page/powerstats/1");
  };

  return (
    <div className={styles.search__div}>
      {status === "rejected" ? (
        <ErrorHandling />
      ) : (
        <>
          {status === "loading" ? (
            <Loading />
          ) : (
            <>
              <img
                className={styles.line__img}
                src="https://png.pngtree.com/png-vector/20191206/ourmid/pngtree-abstract-red-sunlight-effect-flare-ray-illuminated-vector-background-png-image_2056093.jpg"
                alt="line__effects__image"
              />
              <form
                className={styles.form__search}
                onSubmit={onSearchInputHandler}
              >
                <input
                  type="text"
                  placeholder="Search your superhero here..."
                  ref={inputRef}
                  className={styles.inpt}
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
              <div>
                <p>
                  "Type your superhero search query above and hit enter to
                  uncover your favorite heroes."
                </p>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default SearchPage;
