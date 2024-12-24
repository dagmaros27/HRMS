import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, allowedRoles, userRole }) => {
  return allowedRoles.includes(userRole) || allowedRoles.includes("ANY") ? (
    Component
  ) : (
    <Navigate to="/auth/403" /> // Redirect to a 403 (Forbidden) page or another route
  );
};

export default ProtectedRoute;
