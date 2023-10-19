/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import LoginGoogle from "./LoginGoogle";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div>
      <div className="mx-auto bg-secondColor max-w-md rounded-md md:py-0 py-16 md:mt-16 ">
        <div className="md:p-6 px-4 mx-auto flex flex-col gap-6 max-w-sm">
          <h1 className="text-4xl text-center font-bold mb-3">Login</h1>
         
          <label htmlFor="" className="font-medium">
            Your Email:
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="input mt-2 font-normal text-sm input-bordered w-full focus:outline-none"
            />
          </label>

          <label htmlFor="" className="font-medium relative">
            Password:
            <input
              type={showPass ? "text" : "password"}
              required
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
         
          <button className="btn bg-mainColor text-secondColor hover:bg-mainColor">
            Login
          </button>
          <p>
            Don't have an Account?{" "}
            <span className="underline font-semibold cursor-pointer">
             <Link to={'/SignUp'}>SignUp</Link>
            </span>
          </p>
          <LoginGoogle></LoginGoogle>
        </div>
      </div>
    </div>
  );
};

export default Login;
