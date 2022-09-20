import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Navigate } from "react-router-dom";
import { Constants } from "../core/variables/constants";
import { doAuthAction } from "../state/actions/auth.actions";


export default function PublicRoute({ children }: any) {

  

  const dispatch = useDispatch<any>();
  const token = localStorage.getItem(Constants.TOKEN);
  const rememberMe = localStorage.getItem(Constants.REMEMBERME);
  if (token && rememberMe) {
    dispatch(doAuthAction())
    return <Navigate to="/" />;
  }
  return children;
}