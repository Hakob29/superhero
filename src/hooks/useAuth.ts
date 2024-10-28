import { useSelector } from "react-redux";
import { Rootstate } from "../store/store";

const useAuth = () => {
  const user = useSelector((state: Rootstate) => state.user);
  return {
    isAuth: !!user.user?.idToken,
    id: user.user?.localId,
    email: user.user?.email,
    token: user.user?.idToken,
  };
};

export default useAuth;
