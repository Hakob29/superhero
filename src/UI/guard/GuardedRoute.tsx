import React from "react";
import GuardedRouteInterface from "./GuardedRoute.interface";
import useAuth from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

const GuardedRoute: React.FC<GuardedRouteInterface> = ({ children }) => {
  const isAuth = useAuth().isAuth;
  if (!isAuth) {
    return <Navigate to="/auth/log-in" />;
  } else {
    return children;
  }
};

export default GuardedRoute;
