import React from "react";
import { useAuth } from "../context/AuthContext";
import {Navigate} from "react-router-dom"

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Prevent redirect until auth check is complete
  }

  return currentUser ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
