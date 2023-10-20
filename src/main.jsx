import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import router from "./Router/Router";
import Context from "./Context/Context";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <Toaster />
      <RouterProvider router={router}>
        <Layout></Layout>
      </RouterProvider>
    </Context>
  </React.StrictMode>
);
