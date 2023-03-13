import { Outlet } from "react-router";

import { useContext } from "react";

import { AuthContext } from "../contexts/AuthContext";

// state from redux

export const ProtectedRoutes = () => {
 const { currentUser } = useContext(AuthContext);

  return Boolean(currentUser) ? (
    <Outlet />
  ) : (
    <>{window.open(`${process.env.REACT_APP_MAIN}/login/client`, "_self")}</>
  );
};
