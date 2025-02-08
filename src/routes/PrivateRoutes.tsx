import React, { useMemo } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes: React.FC = () => {
  const isAuth = useMemo(
    () => Boolean(window.localStorage.getItem("token")),
    []
  );

  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoutes;
