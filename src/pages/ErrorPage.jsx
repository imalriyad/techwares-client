
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="mx-auto max-w-screen-md text-center my-[7%]">
            <img src="https://i.postimg.cc/HkXrVBYq/page-Not-Found.png" className="w-[70%] mx-auto" alt="" />
         <Link to={'/'}>   <button className="btn btn-neutral mt-6"><FaArrowLeft></FaArrowLeft>Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;