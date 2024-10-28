import React from "react";
import styles from "./Connections.module.css";
import useHero from "../../hooks/useHero";

const Connections: React.FC = () => {
  const hero = useHero();

  return (
    <ul className={styles.connections__ul}>
      <li>
        <div>
          <ion-icon name="remove"></ion-icon>
          GRUOP-AFFILIATION
        </div>
        <p>{hero?.connections["group-affiliation"] || "-"}</p>
      </li>
      <li>
        <div>
          <ion-icon name="remove"></ion-icon>
          RELATIVES
        </div>
        <p>{hero?.connections.relatives || "-"}</p>
      </li>
    </ul>
  );
};

export default Connections;
