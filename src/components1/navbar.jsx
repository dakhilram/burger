import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import {ShoppingCart} from "phosphor-react"
export const Navbar=()=>{
    return <div className="navbar"> 
    <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/cart"> <ShoppingCart size={25}/> </Link>
        <Link to="/contact"> Contact us </Link>
        <Link to="/login"> LOGIN </Link>

        
        </div> </div>;
};