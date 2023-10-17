import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
  <>
    <div>
    <div className="bg-mainColor"><Navbar></Navbar></div>
      <Outlet></Outlet>
    </div>
    <div className="w-full">
        <Footer></Footer>
    </div>
    </>
  );
};

export default Layout;
