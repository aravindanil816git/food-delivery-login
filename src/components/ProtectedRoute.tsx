import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { Spin } from "antd";

type Page = {
  children: React.ReactNode;
};

export const ProtectedRoute = ({ children }: Page) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return isAuthenticated ? <>{children}</> : <Spin />;
};