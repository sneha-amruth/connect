import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
    const location = useLocation();
    const isUserLoggedIn = JSON.parse(localStorage.getItem('profile'))?.userId;

    return isUserLoggedIn ? (
        children
      ) : (
        <Navigate state={{ from: location.pathname }} replace to="/auth" />
      );
  }