import React from "react";
import styles from "./Appearance.module.css";
import useHero from "../../hooks/useHero";

const Appearance: React.FC = () => {
  const hero = useHero();

  return (
    <ul className={styles.appearance__ul}>
      <li>
        <div>
          <ion-icon name="star"></ion-icon> GENDER{" "}
        </div>
        <span>{hero?.appearance.gender || "-"}</span>
      </li>
      <li>
        <div>
          <ion-icon name="star"></ion-icon>
          RACE
        </div>
        <span>{hero?.appearance.race || "-"}</span>
      </li>
      <li>
        <div>
          <ion-icon name="star"></ion-icon>
          HEIGHT
        </div>
        <span>{hero?.appearance.height[1] || "-"}</span>
      </li>
      <li>
        <div>
          <ion-icon name="star"></ion-icon>
          WEIGHT
        </div>
        <span>{hero?.appearance.weight[1] || "-"}</span>
      </li>
      <li>
        <div>
          <ion-icon name="star"></ion-icon>
          EYE-COLOR
        </div>
        <span>{hero?.appearance["eye-color"] || "-"}</span>
      </li>
      <li>
        <div>
          <ion-icon name="star"></ion-icon>
          HAIR-COLOR
        </div>
        <span>{hero?.appearance["hair-color"] || "-"}</span>
      </li>
    </ul>
  );
};

export default Appearance;
