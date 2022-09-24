import { Outlet } from "react-router-dom";
import NavBar from "../header/nav-bar";

export default function DefaultLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}
