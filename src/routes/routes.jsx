import Error from "../pages/Error";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayout from "../Layouts/DashboardLayouts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <Error />,
   
  },
]);
