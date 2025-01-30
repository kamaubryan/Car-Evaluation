import { useContext } from "react";
import CartContext from "../../context/contextProvider";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const { isAuthenticated } = useContext(CartContext);
  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Todo: implement role based navigation
  // if(isAuthenticated && user?.role === 'admin') return <Navigate to="/dashboard" replace />;

  return children;
};

export default AuthGuard;
