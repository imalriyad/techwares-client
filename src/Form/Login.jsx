/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginGoogle from "./LoginGoogle";
import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import toast from "react-hot-toast";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const { siginInWithEmail } = useContext(AuthContext);
  const navigate = useNavigate();
  const {state} = useLocation()
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    siginInWithEmail(email, password)
      .then(() => {
        e.target.reset();
        toast.success("Logged in Successful");
        navigate(state? state :'/');
      })
      .catch((error) =>
        toast.error(`${error.message.slice(22).replace(")", "")}`)
      );
  };
  return (
    <div>
      <div className="mx-auto bg-secondColor max-w-md rounded-md pt-4 md:mt-16  ">
        <div className="md:p-10 px-4 mx-auto flex flex-col gap-6 max-w-md">
          <form onSubmit={handleSignIn} className="flex flex-col gap-6">
            <h1 className="text-4xl text-center font-bold mb-3">Login</h1>

            <label htmlFor="" className="font-medium">
              Your Email:
              <input
                type="email"
                required
                name="email"
                placeholder="Enter your email"
                className="input mt-2 font-normal text-sm input-bordered w-full focus:outline-none"
              />
            </label>

            <label htmlFor="" className="font-medium relative">
              Password:
              <input
                type={showPass ? "text" : "password"}
                required
                name="password"
                placeholder="Enter your password"
                className="input
        mt-2 input-bordered font-normal text-sm w-full focus:outline-none"
              />
              <span onClick={() => setShowPass(!showPass)}>
                {showPass ? (
                  <IoIosEyeOff className="absolute right-3 text-2xl cursor-pointer bottom-3"></IoIosEyeOff>
                ) : (
                  <IoIosEye className="absolute right-3 text-2xl cursor-pointer bottom-3"></IoIosEye>
                )}
              </span>
            </label>

            <button
              type="submit"
              className="btn bg-mainColor text-secondColor hover:bg-mainColor"
            >
              Login
            </button>
          </form>
          <p>
            Don't have an Account?{" "}
            <span className="underline font-semibold cursor-pointer">
              <Link to={"/SignUp"}>SignUp</Link>
            </span>
          </p>
          <LoginGoogle></LoginGoogle>
        </div>
      </div>
    </div>
  );
};

export default Login;
