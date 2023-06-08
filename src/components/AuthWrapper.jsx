import { Navigate, Outlet } from "react-router-dom";

const AuthWrapper = () => {
  const isAuthenticated = localStorage.getItem("user") ? true : false;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AuthWrapper;
