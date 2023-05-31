import React from "react";
import { NavLink } from "react-router-dom";
import "./NavbarModule.css";
export function Navbar(){
    return (<nav className="nav-container">
        <NavLink to="/home" style={{textDecoration: "none", color: "black", fontSize: "40px", fontFamily: "Georgia", borderRadius: "10px", backgroundColor:"white"}}>Home</NavLink>
        <NavLink to="/register" style={{textDecoration: "none", color: "black", fontSize: "40px", fontFamily: "Georgia", borderRadius: "10px", backgroundColor:"white"}}>Register</NavLink>
    </nav>)
}