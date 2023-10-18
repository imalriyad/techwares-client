import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import AddProduct from "../pages/AddProduct";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
import CategoryProduct from "../pages/CategoryProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'/About',
        element:<About></About>
      },
      {
        path:'/Add Product',
        element:<AddProduct></AddProduct>
      },
      {
        path:'/Contact',
        element: <Contact></Contact>
      },
      {
        path:'/products/:brands',
        element: <CategoryProduct></CategoryProduct>,
        loader:({params})=> fetch(`http://localhost:5000/products/${params.brands}`)
      }
    ],
  },
]);

export default router;
