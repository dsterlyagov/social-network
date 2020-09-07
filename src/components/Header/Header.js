import React from "react";
import logo from "../../fda_logo.png";
import classes from './Header.module.css';

const Header = () =>{
    return  <header className={classes.header}>
        <img src={logo} className="app-logo" alt="logo" />

    </header>
}


export default Header;