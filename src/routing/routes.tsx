import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routePaths } from "./routePaths";
import { HomeView } from "../views/home/Home";
import { LoginView } from "../views/login/Login";
import { ProtectedRoute } from "./protectedRoute";

interface IProps {}

const router = createBrowserRouter([
  {
    path: routePaths.root,
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: <HomeView />
      }
    ]
  },
  {
    path: routePaths.auth,
    element: <LoginView />
  }
]);

export const Routes: React.FC<IProps> = () => {
  return <RouterProvider router={router} />;
};
