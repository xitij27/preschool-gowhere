import React from "react";

// react routing imports
import { Navigate, Outlet } from "react-router-dom";

// contexts imports
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute() {

  const { currentUser } = useAuth();

  const authenticated = JSON.parse(localStorage.getItem(`Authenticated`));
  return (authenticated === "true") ? <Outlet /> : <Navigate to="/home" />;
}