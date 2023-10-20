import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import { GoogleAuthProvider } from "firebase/auth";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoginGoogle = () => {
  const { handleGoogleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const googlelogin = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    handleGoogleLogin(googleAuthProvider)
      .then(() => {
        toast.success("Logged in Successful");
        navigate("/");
      })
      .catch((error) =>
        toast.error(`${error.message.slice(22).replace(")", "")}`)
      );
  };

  return (
    <div>
      <div className="flex flex-col w-full border-opacity-50">
        <div className="divider text-[#000000] ">OR</div>
        <button
          onClick={googlelogin}
          className="btn bg-base-300 flex items-center"
        >
          <img
            src="https://static-00.iconduck.com/assets.00/google-icon-512x512-tqc9el3r.png"
            alt=""
            className="w-6"
          />
          Google
        </button>
      </div>
    </div>
  );
};

export default LoginGoogle;
