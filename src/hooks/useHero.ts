import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Rootstate } from "../store/store";

const useHero = () => {
  const params = useParams();
  const heroes = useSelector((state: Rootstate) => state.hero).response!
    .results;
  const currentHeroId = params["hero-id"];
  let currentHero = null;
  if (currentHeroId) {
    currentHero = heroes![+currentHeroId - 1];
  }

  return currentHero;
};

export default useHero;
