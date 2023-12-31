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
import PrivateRoute from "../privateRoute/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
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
          fetch(
            `https://teach-wares-server-6zymhv5sd-imalriyad.vercel.app/products/brands/${params.brands}`
          ),
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://teach-wares-server-6zymhv5sd-imalriyad.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/products/update/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://teach-wares-server-6zymhv5sd-imalriyad.vercel.app/products/update/${params.id}`
          ),
      },
      {
        path: "/Cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
