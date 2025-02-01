import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  if (user?.Role === "buyer") {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default AuthGuard;
