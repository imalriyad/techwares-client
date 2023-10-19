import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import AddProduct from "../pages/AddProduct";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
import BrandProduct from "../Brands/BrandProduct";
import UpdateProduct from "../components/UpdateProduct";
import ProductDetails from "../Brands/ProductDetails";
import Cart from "../components/Cart";
import SignUp from "../form/SignUp";
import Login from "../Form/Login";

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
        path: "/About",
        element: <About></About>,
      },
      {
        path: "/Add Product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/Contact",
        element: <Contact></Contact>,
      },
      {
        path: "/SignUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/products/brands/:brands",
        element: <BrandProduct></BrandProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/brands/${params.brands}`),
      },
      {
        path: "/products/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/products/update/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/update/${params.id}`),
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
        loader: () => fetch(`http://localhost:5000/cart`),
      },
    ],
  },
]);

export default router;
