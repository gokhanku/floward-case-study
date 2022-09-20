import { Link } from "react-router-dom";

import { Navigate } from "react-router-dom";
import { Constants } from "../core/variables/constants";

export default function PublicRoute({ children }: any) {

  const token = localStorage.getItem(Constants.TOKEN);
  const rememberMe = localStorage.getItem(Constants.REMEMBERME);
  if (token && rememberMe) {
    return <Navigate to="/" />;
  }
  return children;
}