import { Outlet } from "react-router-dom";
import NavBar from "../nav-bar";

export default function DefaultLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}
