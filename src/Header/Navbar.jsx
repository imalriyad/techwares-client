import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Context";
import toast from "react-hot-toast";
import auth from "../firebase/firebase.config";
import { signOut } from "firebase/auth";

import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";

const Navbar = () => {
  const navMenu = ["Home", "Add Product", "About", "Contact"];
  const links = navMenu.map((link) => (
    <NavLink
      to={link === "Home" ? "/" : link}
      className="text-base font-semibold text-secondColor ml-7"
      key={link}
    >
      {link}
    </NavLink>
  ));
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const logOutHandler = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout sucessful");
        navigate("/Login");
      })
      .catch((err) => console.log(err));
  };
  const [cartItemLength, setCartItemLength] = useState([]);
  const initialTheme = localStorage.getItem("isDark") === "true";
  const [isDark, setDark] = useState(initialTheme);
  const { cartItem } = useContext(AuthContext);
  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setDark(newIsDark);
    localStorage.setItem("isDark", newIsDark);
  };

  useEffect(() => {
    if (isDark) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }, [isDark]);

  useEffect(() => {
    fetch(`https://teach-wares-server-imalriyad.vercel.app/cart/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setCartItemLength(data));
  }, [user?.email, cartItem, cartItemLength]);

  return (
    <div>
      <div className="navbar max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn text-[#ffff] btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box bg-mainColor w-52"
            >
              {links}
            </ul>
          </div>
          <a>
            <img
              src="https://i.postimg.cc/NMV7ZzSP/techwares-low-resolution-logo-black-on-transparent-background.png"
              className="lg:w-[35%] w-40"
              alt=""
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end ">
          <div onClick={toggleDarkMode}>
            {" "}
            {isDark ? (
              <MdOutlineLightMode className="text-[#ffff] text-3xl cursor-pointer"></MdOutlineLightMode>
            ) : (
              <MdOutlineNightlight className="text-[#ffff] text-3xl cursor-pointer"></MdOutlineNightlight>
            )}
          </div>

          <div className="dropdown dropdown-end mr-3">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator text-secondColor">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {cartItemLength.length}
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">
                  {cartItemLength.length}
                </span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <Link
                    to={"/Cart"}
                    className="btn bg-mainColor hover:bg-mainColor text-[#ffff] btn-block"
                  >
                    {" "}
                    <span>My Cart</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {!user ? (
            <Link to={"/Login"}>
              <button className="btn md:btn-md btn-sm md:px-8 text-secondColor bg-mainColor hover:bg-mainColor">
                Login
              </button>
            </Link>
          ) : (
            <div className="dropdown dropdown-end  ">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-12 rounded-full border-2 border-[#ffff]">
                  {user?.photoURL ? (
                    <img src={`${user?.photoURL}`} alt="" />
                  ) : (
                    <img src="https://i.ibb.co/3CNtLPY/blankdp.png" />
                  )}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="btn bg-mainColor text-secondColor hover:bg-mainColor font-bold">
                  {user.displayName}
                </li>

                <li
                  onClick={logOutHandler}
                  className="btn bg-mainColor hover:bg-mainColor  font-bold"
                >
                  <span className="text-secondColor hover:text-secondColor">
                    Logout
                  </span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
