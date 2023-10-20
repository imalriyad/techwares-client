/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import LoginGoogle from "../Form/LoginGoogle";
import { AuthContext } from "../Context/Context";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  const { creatUserWithEmail } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoUrl = e.target.photoUrl.value;
    const check = e.target.checked.checked;

    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters long.");
    }
    // eslint-disable-next-line no-useless-escape
    if (!/[!@#$%^&*()_=\[\]{};:'",<>?/\\|-]/.test(password)) {
      return toast.error(
        "Password must contain at least one special character."
      );
    }
    if (!/[A-Z]/.test(password)) {
      return toast.error("Password must contain at least one capital letter.");
    }
    if (!check) {
      return toast.error("Accept Terms and conditions to proceed");
    }
    creatUserWithEmail(email, password)
      .then(() => {
        e.target.reset();
        toast.success("Registration Successful");
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {})
          .catch((error) => {
            console.log(error);
          });
        navigate("/");
      })
      .catch((err) => toast.error(`${err.message.slice(17).replace(")", "")}`));
  };

  return (
    <div className="mx-auto bg-secondColor max-w-md rounded-md pt-4 md:mt-16 ">
      <div className="md:p-10 px-4 mx-auto flex flex-col gap-4 max-w-md">
        <h1 className="text-4xl text-center font-bold mb-3">SignUp</h1>
        <form onSubmit={handleSignUp} className="flex flex-col gap-4">
          <label htmlFor="" className="font-medium">
            Your Name:
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input mt-2 font-normal input-bordered text-sm w-full focus:outline-none"
            />
          </label>
          <label htmlFor="" className="font-medium">
            Your Email:
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="input mt-2 font-normal text-sm input-bordered w-full focus:outline-none"
            />
          </label>
          <label htmlFor="" className="font-medium">
            Your Photo URl:
            <input
              type="text"
              name="photoUrl"
              required
              placeholder="Enter your photoUrl"
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
          <p className="flex gap-2 items-center">
            <input
              type="checkbox"
              name="checked"
              className="checkbox-sm checkbox"
              id=""
            />{" "}
            Accept
            <span className="underline cursor-pointer">
              Terms and conditions
            </span>
          </p>
          <button
            type="submit"
            className="btn bg-mainColor text-secondColor hover:bg-mainColor"
          >
            SignUp
          </button>
        </form>
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
