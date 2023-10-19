/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import LoginGoogle from "../Form/LoginGoogle";

const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="mx-auto bg-secondColor max-w-md rounded-md md:py-0 py-16 md:mt-16 ">
      <div className="md:p-6 px-4 mx-auto flex flex-col gap-6 max-w-sm">
        <h1 className="text-4xl text-center font-bold mb-3">SignUp</h1>
        <label htmlFor="" className="font-medium">
          Your Name:
          <input
            type="text"
            placeholder="Enter your name"
            className="input mt-2 font-normal input-bordered text-sm w-full focus:outline-none"
          />
        </label>
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
        <p className="flex gap-2 items-center">
          <input
            type="checkbox"
            name="check"
            className="checkbox-sm checkbox"
            id=""
          />{" "}
          Accept<span className="underline ">Terms and conditions</span>
        </p>
        <button className="btn bg-mainColor text-secondColor hover:bg-mainColor">
          SignUp
        </button>
        <p>
          Already have an Account?{" "}
          <span className="underline font-semibold cursor-pointer">
            <Link to={"/Login"}>Login</Link>
          </span>
        </p>
        <LoginGoogle></LoginGoogle>
      </div>
    </div>
  );
};

export default SignUp;
