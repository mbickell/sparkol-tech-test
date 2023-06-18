import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routePaths } from "./routePaths";
import { HomeView } from "../views/home/Home";
import { LoginView } from "../views/login/Login";
import { ProtectedRoute } from "./protectedRoute";
import { useAuthContext } from "../providers/auth";

interface IProps {}

export const Routes: React.FC<IProps> = () => {
  const { user } = useAuthContext();

  const router = createBrowserRouter([
    {
      path: routePaths.root,
      element: (
        <ProtectedRoute isAllowed={!!user?.name}>
          <HomeView />
        </ProtectedRoute>
      )
    },
    {
      path: routePaths.auth,
      element: <LoginView />
    }
  ]);

  return <RouterProvider router={router} />;
};
