import { Navigate } from "react-router-dom";
import { Constants } from "../config/variables/constants";
export default function LoginRoute({ children }: any) {
  const token = localStorage.getItem(Constants.TOKEN);
  const rememberMe = localStorage.getItem(Constants.REMEMBERME);
  if (token && rememberMe) {
    return <Navigate to="/" />;
  }else 
    return children;
  }