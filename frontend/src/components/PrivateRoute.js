import React from "react";

// react routing imports
import { Navigate, Outlet } from "react-router-dom";

// contexts imports
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute() {
  const { authenticated,currentUser } = useAuth();
  return authenticated ? <Outlet /> : <Navigate to="/home" />;
}