import { useMemo } from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoutes = () => {
  const isAuth = useMemo(() => window.localStorage.getItem("token"), []);
  return isAuth ? <Navigate to="/" replace /> : <Outlet />;
};

export default AuthRoutes;
