import React, { useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { LoadingOutlined } from "@ant-design/icons";
import CartContext from "./context/contextProvider";

const publicRoutes = [
  "/",
  "/home",
  "/login",
  "/signUp",
  "/contact",
  "/about",
  "/services",
];

const AuthGuard = ({ children }) => {
  const { isAuthenticated } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(true);
  const currentPath = window.location.pathname;

  useEffect(() => {
    // const validateToken = async () => {
    //   const token = localStorage.getItem("token");
    //   if (!token) {
    //     setIsAuthenticated(true);
    //     setIsLoading(false);
    //     return;
    //   }
    //   try {
    //     await axios.get("http://localhost:8085/api/v1/validate-token", {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     });
    //     setIsAuthenticated(true);
    //   } catch (error) {
    //     localStorage.removeItem("token");
    //     setIsAuthenticated(false);
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };
    // validateToken();
  }, []);

  if (isLoading) {
    return <LoadingOutlined />;
  }

  // Allow public routes
  if (publicRoutes.includes(currentPath)) {
    return children;
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default AuthGuard;
