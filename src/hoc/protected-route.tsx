import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Navigate } from "react-router-dom";
import { Constants } from "../core/variables/constants";

export default function PrivateRoute({ children }: any) {

  const { loading, isAuthenticated, error } = useSelector(
    (state: any) => state.auth
  );

  const token = localStorage.getItem(Constants.TOKEN);
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
}
