import { Outlet } from "react-router-dom";
import NavBar from "../nav-bar";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { doAuthAction } from "../../redux/actions/auth.actions";
import { Constants } from "../../core/variables/constants";

export default function HomeLayout() {
  const dispatch = useDispatch<any>();
  const token = localStorage.getItem(Constants.TOKEN);
  if (!token) {
    return <Navigate to="/login" />;
  } else {
    dispatch(doAuthAction());
    return (
      <>
        <NavBar />
        <Outlet />
      </>
    );
  }
}
