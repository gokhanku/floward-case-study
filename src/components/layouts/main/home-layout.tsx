import { Outlet } from "react-router-dom";
import NavBar from "../header/nav-bar";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { doAuthAction } from "../../../store/actions/auth.actions";
import { Constants } from "../../../config/variables/constants";

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
