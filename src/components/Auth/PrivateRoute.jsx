import { Route, Navigate } from "react-router-dom";

export default function PrivateRoute({path, ...props}) {
    const isUserLoggedIn = JSON.parse(localStorage.getItem('profile'))?.userId;

    return isUserLoggedIn ? (
        <Route {...props} path={path} />
      ) : (
        <Navigate state={{ from: path }} replace to="/auth" />
      );
  }