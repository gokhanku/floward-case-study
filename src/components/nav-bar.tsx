import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import { logout } from "../state/slices/auth.slice";
import {logoutAction} from "../state/actions/auth.actions"
import { useEffect } from "react";

const NavBar = () => {
    const navigate = useNavigate();
  const dispatch = useDispatch<any>();

  const [navbar, setNavbar] = useState(false);
  const { loading, isAuthenticated, error } = useSelector(
    (state: any) => state.auth
  );



  const logoutFoo=()=>{
    // debugger
    // localStorage.clear();
    // navigate("/login");
    // localStorage.clear();
    // navigate("/login");

   dispatch(logoutAction())
    
  }

  useEffect(() => {
    // console.log(isAuthenticated);
    
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated]);

  return (
    <nav className="shadow flex items-center justify-between px-4 py-3 flex-wrap">
      <Link to="/">
        <h2 className="text-2xl font-bold m-0">LOGO</h2>
      </Link>
      <button onClick={logoutFoo} className="bg-primary  text-white  px-4 py-2 text-gray-800  rounded-md shadow hover:bg-gray-100" type="button">LOGOUT</button>
    </nav>

    
  );
};

export default NavBar;
