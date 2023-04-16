import axios from "axios";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
 
// import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink,Link } from "react-router-dom";
import "./Navbar.css"
import { Context, server } from "../../index";
 
const Navbar=()=>{
  const { isAuthenticated, setIsAuthenticated,loading, setLoading,user } =useContext(Context);
  

  const logoutHandler = async () => {
    setLoading(true);
    try {
      await axios.get(`/api/v1/users/logout`, {
        withCredentials: true,
      });

      toast.success("Logged Out Successfully");
      setIsAuthenticated(false);
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(true);
      setLoading(false);
    }
  };
 return (
  <>   
  <nav className="navbar navbar-expand-lg bg-body-tertiary navbg sticky">
  <div className="container-fluid">
    <NavLink className="navbar-brand logo" to="/">HuntSkills
       {/* <img className="logo" src="" alt="Error" />  */}
    </NavLink>
    <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav nav-pills ms-auto mb-2 mb-lg-0">
        <li className="nav-item d-flex justify-content-center ">
          <NavLink
            activeClassName="menu-active"
            exact
            className="nav-link"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item d-flex justify-content-center">
          <NavLink
            activeClassName="menu-active"
            exact
            className="nav-link"
            to="/game"
          >
            Puzzle
          </NavLink>
        </li>
        {isAuthenticated?
        <li className="nav-item d-flex justify-content-center">
          <NavLink
            activeClassName="menu-active "
            exact
            className="nav-link"
            to="/profile"
          >
            Profile
          </NavLink>
        </li>
        :""}
        {isAuthenticated?<li className="nav-item d-flex justify-content-center">
          <Link disabled={loading} onClick={logoutHandler} 
            activeClassName="menu-active"
            exact
            className="nav-link"
            to="/login"
             
          >
            Logout
          </Link>
           
        </li> :
        <li className="nav-item d-flex justify-content-center">
          <NavLink
            activeClassName="menu-active"
            exact
            className="nav-link"
            to="/login"
          >
            Login
          </NavLink>
        </li>}
        {!isAuthenticated?
        <li className="nav-item d-flex justify-content-center">
          <NavLink
            activeClassName="menu-active"
            exact
            className="nav-link"
            to="/signup"
          >
            Register
          </NavLink>
        </li>:""}
         
         
        {(isAuthenticated && user && user.usertype==="admin")?<li className="nav-item d-flex justify-content-center">
          <NavLink
            activeClassName="menu-active"
            exact
            className="nav-link"
            to="/adminprofile"
          >
            Admin
          </NavLink>
        </li>:<Link></Link>}
      </ul>
    </div>
  </div>
</nav>
 </>
  );
}
export default Navbar;
