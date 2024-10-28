import React from "react";
import styles from "./Powerstats.module.css";
import useHero from "../../hooks/useHero";

const Powerstats: React.FC = (props) => {
  const hero = useHero();

  return (
    <ul className={styles.powerstats__ul2}>
      <li>
        <div className={styles.ul__div}>
          <ion-icon name="shield-half-outline"></ion-icon>
          <p>intelligence</p>
        </div>
        <span>{hero?.powerstats.intelligence || "-"}</span>
      </li>
      <li>
        <div className={styles.ul__div}>
          <ion-icon name="shield-half-outline"></ion-icon>
          <p>strength</p>
        </div>
        <span>{hero?.powerstats.strength || "-"}</span>
      </li>
      <li>
        <div className={styles.ul__div}>
          <ion-icon name="shield-half-outline"></ion-icon>
          <p>speed</p>
        </div>
        <span>{hero?.powerstats.speed || "-"}</span>
      </li>
      <li>
        <div className={styles.ul__div}>
          <ion-icon name="shield-half-outline"></ion-icon>
          <p>durability</p>
        </div>
        <span>{hero?.powerstats.durability || "-"}</span>
      </li>
      <li>
        <div className={styles.ul__div}>
          <ion-icon name="shield-half-outline"></ion-icon>
          <p>power</p>
        </div>
        <span>{hero?.powerstats.power || "-"}</span>
      </li>
      <li>
        <div className={styles.ul__div}>
          <ion-icon name="shield-half-outline"></ion-icon>
          <p>combat</p>
        </div>
        <span>{hero?.powerstats.combat || "-"}</span>
      </li>
    </ul>
  );
};

export default Powerstats;
