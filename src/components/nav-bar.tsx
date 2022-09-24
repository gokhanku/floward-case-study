import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { logoutAction } from "../redux/actions/auth.actions";
import { useEffect } from "react";
import { Constants } from "../core/variables/constants";
import { doAuth } from "../redux/slices/auth.slice";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const { isAuthenticated } = useSelector(
    (state: any) => state.auth
  );

  const logout = () => {
    dispatch(logoutAction());
  };

  useEffect(() => {
    let token = localStorage.getItem(Constants.TOKEN);
    if(token){
      dispatch(doAuth())
    }else{
      navigate("/login");
    }
  }, [isAuthenticated]);

  return (
    <nav className="shadow flex items-center justify-between px-4 py-3 flex-wrap">
      <Link to="/">
        <h2 className="text-2xl font-bold m-0">LOGO</h2>
      </Link>
      <button
        onClick={logout}
        className="bg-primary  text-white  px-4 py-2 text-gray-800  rounded-md shadow hover:bg-gray-100"
        type="button"
      >
        LOGOUT
      </button>
    </nav>
  );
};

export default NavBar;
