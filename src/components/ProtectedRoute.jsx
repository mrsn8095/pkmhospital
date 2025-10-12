import React from "react";
import { Navigate } from "react-router-dom";

/*
 Simple protected route:
 Checks localStorage for an "adminToken"
*/

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
