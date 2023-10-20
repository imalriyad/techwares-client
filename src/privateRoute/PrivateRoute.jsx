/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const {pathname} = useLocation()
  if (loading) {
    return <div className="text-center  my-[10%]"><span className="loading loading-bars loading-lg"></span></div>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={pathname} to={"/Login"}></Navigate>;
};

export default PrivateRoute;
