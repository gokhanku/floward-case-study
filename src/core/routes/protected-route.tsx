import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { doAuthAction } from "../../redux/actions/auth.actions";
import { Constants } from "../variables/constants";

export default function PrivateRoute({ children }: any) {
  const dispatch = useDispatch<any>();
  const token = localStorage.getItem(Constants.TOKEN);
  if (!token) {
    return <Navigate to="/login" />;
  }else{
    dispatch(doAuthAction());
    return children;
  }
  
}
