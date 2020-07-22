import React from "react";
import logo from "../images/movit_logo.svg";
import useStyles from "../styles/NavbarStyles";
import Searchbar from "./Searchbar";
import LanguageChanger from "./LanguageChanger";

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.navbardiv}>
      <img alt="Logo" src={logo} />
      <LanguageChanger />
      <Searchbar />
    </div>
  );
}
