import useHero from "../../hooks/useHero";
import styles from "./Biography.module.css";
import React from "react";

const Biography: React.FC = () => {
  const hero = useHero();

  return (
    <ul className={styles.biography__ul}>
      <li>
        Full-Name: <span>{hero?.biography["full-name"] || "-"}</span>
      </li>
      <li>
        Alert-Egos: <span>{hero?.biography["alter-egos"] || "-"}</span>
      </li>
      <li>
        Aliases: <span>{hero?.biography.aliases || "-"}</span>
      </li>
      <li>
        Place-Of-Birth:
        <span> {hero?.biography["place-of-birth"] || "-"}</span>{" "}
      </li>
      <li>
        First-Appearance:{" "}
        <span> {hero?.biography["first-appearance"] || "-"}</span>
      </li>
      <li>
        Publisher: <span> {hero?.biography.publisher || "-"}</span>
      </li>
    </ul>
  );
};

export default Biography;
