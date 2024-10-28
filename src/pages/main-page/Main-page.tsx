import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import styles from "./Main-page.module.css";
import Powerstats from "../powerstats/Powerstats";
import Biography from "../biography/Biography";
import Appearance from "../appearance/Appearance";
import Connections from "../connections/Connections";
import { useSelector } from "react-redux";
import { Rootstate } from "../../store/store";
import { useState } from "react";
import Work from "../work/Work";
import Loading from "../loading/Loading";
import ErrorHandling from "../../auth/errors/ErrorHandling";

const MainPage = () => {
  const [currentHero, setCurrentHero] = useState(1);
  const navigate = useNavigate();
  const heroState = useSelector((state: Rootstate) => state.hero);
  const heroStateLength = heroState.response?.results?.length;
  const heroes = heroState.response?.results;

  //Right click to another hero
  const onRightHeroHandler = () => {
    if (currentHero === heroStateLength!) {
      return;
    }
    setCurrentHero(currentHero + 1);
    navigate(`powerstats/${currentHero + 1}`);
  };

  //Left click to another hero
  const onLeftHeroHandler = () => {
    if (currentHero > 1) {
      setCurrentHero(currentHero - 1);
      navigate(`powerstats/${currentHero - 1}`);
    }
  };

  return (
    <div className={styles.mainPage__div}>
      {heroState.status === "rejected" ? (
        <ErrorHandling />
      ) : (
        <>
          {heroState.status === "loading" ? (
            <Loading />
          ) : (
            <>
              <div className={styles.main__div1}>
                {heroStateLength! > 1 ? (
                  <button
                    className={styles.icon__btn_left}
                    onClick={onLeftHeroHandler}
                  >
                    <ion-icon name="chevron-back-circle-outline"></ion-icon>{" "}
                  </button>
                ) : (
                  ""
                )}

                <img
                  className={styles.hero__img}
                  src={heroes![currentHero - 1].image.url}
                  alt="hero__image"
                />
                {heroStateLength! > 1 ? (
                  <button
                    className={styles.icon__btn_right}
                    onClick={onRightHeroHandler}
                  >
                    <ion-icon name="chevron-forward-circle-outline"></ion-icon>{" "}
                  </button>
                ) : (
                  ""
                )}
              </div>
              <div className={styles.main__div2}>
                <div className={styles.media__div}>
                  <h1>{heroes![currentHero - 1].name}</h1>
                  <p>
                    {currentHero}/{heroStateLength}
                  </p>
                  <button
                    className={styles.media__btn}
                    onClick={onLeftHeroHandler}
                  >
                    <ion-icon name="chevron-back-circle-outline"></ion-icon>{" "}
                  </button>
                  <button
                    className={styles.media__btn}
                    onClick={onRightHeroHandler}
                  >
                    <ion-icon name="chevron-forward-circle-outline"></ion-icon>{" "}
                  </button>
                </div>
                <ul className={styles.main__ul1}>
                  <li>
                    <NavLink
                      to={`/main-page/powerstats/${currentHero}`}
                      className={(navData) =>
                        navData.isActive ? styles.active : ""
                      }
                    >
                      POWERSTATS
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`/main-page/biography/${currentHero}`}
                      className={(navData) =>
                        navData.isActive ? styles.active : ""
                      }
                    >
                      BIOGRAPHY
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`/main-page/appearance/${currentHero}`}
                      className={(navData) =>
                        navData.isActive ? styles.active : ""
                      }
                    >
                      APPEARANCE
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`/main-page/connections/${currentHero}`}
                      className={(navData) =>
                        navData.isActive ? styles.active : ""
                      }
                    >
                      CONNECTIONS
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`/main-page/work/${currentHero}`}
                      className={(navData) =>
                        navData.isActive ? styles.active : ""
                      }
                    >
                      WORK
                    </NavLink>
                  </li>
                </ul>
                <Routes>
                  <Route path="/powerstats/:hero-id" element={<Powerstats />} />
                  <Route path="/biography/:hero-id" element={<Biography />} />
                  <Route path="/appearance/:hero-id" element={<Appearance />} />
                  <Route
                    path="/connections/:hero-id"
                    element={<Connections />}
                  />
                  <Route path="/work/:hero-id" element={<Work />} />
                </Routes>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default MainPage;

/*

[1,2,3]

<div>{nikolman[num]}</div>


*/
