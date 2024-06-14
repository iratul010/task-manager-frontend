import React from "react";
import ReactDOM from "react-dom/client";
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import AuthProvider from "./AuthProvider/AuthProvider";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
      <ToastContainer />
   
    </AuthProvider>
  </React.StrictMode>
);
