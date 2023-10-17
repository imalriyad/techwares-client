import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import AddProduct from "../pages/AddProduct";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'About',
        element:<About></About>
      },
      {
        path:'Add Product',
        element:<AddProduct></AddProduct>
      },
      {
        path:'Contact',
        element: <Contact></Contact>
      }
    ],
  },
]);

export default router;
