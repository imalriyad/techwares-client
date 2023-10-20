import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  const { pathname, state } = useLocation();

  pathname === "/" ? (document.title = `TechWares | Home`) : pathname;
  pathname === "/About"
    ? (document.title = `TechWares ${pathname.replace("/", " | ")}`)
    : pathname;
  pathname === "/Contact"
    ? (document.title = `TechWares ${pathname.replace("/", " | ")}`)
    : pathname;
  pathname === "/Add%20Product"
    ? (document.title = `TechWares ${pathname.replace("/", " | ").replace(/%20/g, ' ')}`)
    : pathname;
  pathname === "/Cart"
    ? (document.title = `TechWares ${pathname.replace("/", " | ")}`)
    : pathname;

  state ? (document.title = state) : "";

  return (
    <>
      <div>
        <div className="bg-mainColor">
          <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
      </div>
      <div className="w-full">
        <Footer></Footer>
      </div>
    </>
  );
};

export default Layout;
