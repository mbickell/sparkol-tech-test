import * as React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { routePaths } from "./routePaths";

interface IProps {
  isAllowed?: boolean;
}

export const ProtectedRoute: React.FC<React.PropsWithChildren<IProps>> = ({
  isAllowed,
  children
}) => {
  if (!isAllowed) {
    return <Navigate to={routePaths.auth} />;
  }

  return children ? <>{children}</> : <Outlet />;
};