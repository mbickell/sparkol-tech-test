import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routePaths } from "./routePaths";
import { HomeView } from "../views/home/Home";

interface IProps {}

const router = createBrowserRouter([
  {
    path: routePaths.home,
    element: <HomeView />
  }
]);

export const Routes: React.FC<IProps> = () => {
  return <RouterProvider router={router} />;
};
