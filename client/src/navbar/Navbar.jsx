import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate()
  let token = localStorage.getItem("Authorization")
  let isAdmin = localStorage.getItem("isAdmin")


  return token ? (
    <nav className="navbar-container">
      <div onClick = {()=>navigate("/dashboard")} className="navbar-logo">
        Admin<span>.io</span>
      </div>
      <div className="navbar-links">
        {eval(isAdmin) && <Link to = {"/"} >Billing</Link>}
        {eval(isAdmin) && <Link to = {"/admin"}>Admin Features</Link>}
        <Link to = {"/login"} onClick = {()=>localStorage.clear()}>Logout</Link>
      </div>
    </nav>
  ) : (
    <></>
  );
};

export default Navbar;