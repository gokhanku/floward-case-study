import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
  const [navbar, setNavbar] = useState(false);
  const { loading, isAuthenticated, error } = useSelector(
    (state: any) => state.auth
  );

  const logout=()=>{
    localStorage.clear();
    
    setTimeout(() => {
    navigate("/login");
    }, 200);
  }

  return (
    <nav className="shadow flex items-center justify-between px-4 py-3 flex-wrap">
      <Link to="/">
        <h2 className="text-2xl font-bold m-0">LOGO</h2>
      </Link>
      <button onClick={logout} className="bg-primary  text-white  px-4 py-2 text-gray-800  rounded-md shadow hover:bg-gray-100" type="button">LOGOUT</button>
    </nav>

    
  );
};

export default NavBar;
