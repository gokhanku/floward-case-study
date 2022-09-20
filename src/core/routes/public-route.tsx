import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { doAuthAction } from "../../redux/actions/auth.actions";
import { Constants } from "../variables/constants";
export default function PublicRoute({ children }: any) {
  const dispatch = useDispatch<any>();
  const token = localStorage.getItem(Constants.TOKEN);
  const rememberMe = localStorage.getItem(Constants.REMEMBERME);
  if (token && rememberMe) {
    dispatch(doAuthAction());
    return <Navigate to="/" />;
  }
  return children;
}
