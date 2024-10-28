import React from "react";
import styles from "./Work.module.css";
import useHero from "../../hooks/useHero";

const Work: React.FC = () => {
  const hero = useHero();

  return (
    <ul className={styles.work__ul}>
      <li>
        <div>
          <ion-icon name="remove"></ion-icon>
          Occupation
        </div>
        <p>{hero?.work.occupation || "-"}</p>
      </li>
      <li>
        <div>
          <ion-icon name="remove"></ion-icon>
          Base
        </div>
        <p>{hero?.work.base || "-"}</p>
      </li>
    </ul>
  );
};

export default Work;
