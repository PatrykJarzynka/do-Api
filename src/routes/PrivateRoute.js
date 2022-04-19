import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectToken } from "../store/slices/auth";

const PrivateRoute = () => {
  const token = useSelector(selectToken);

  return !token ? <Navigate to="/login" replace /> : <Outlet />;
};

export default PrivateRoute;
