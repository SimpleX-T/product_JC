import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home";
import RootLayout from "../pages/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
