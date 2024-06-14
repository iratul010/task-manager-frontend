import Error from "../pages/Error";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayout from "../Layouts/DashboardLayouts";
import ClientProfile from "../pages/dashboard/ClientProfile";
import TaskFirstInfo from "../pages/dashboard/TaskFirstInfo";
import TasksManager from "../pages/dashboard/TasksManager";
import TaskSubmit from "../pages/dashboard/TaskSubmit";
import TaskUpdate from "../pages/dashboard/TaskUpdate";

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
   children:[
    {
      index:true,
      
      element:<TaskFirstInfo/>
    },
    {
       
       path:"profile",
       element:<ClientProfile/>
    }
    ,
    {
       
       path:"task-manager",
       element:<TasksManager/>
    }
    ,
    {
       
       path:"task-sumbit",
       element:<TaskSubmit/>
    }
    ,
    {
       
       path:"task-update",
       element:<TaskUpdate/>
    }
   ]
  },
]);
