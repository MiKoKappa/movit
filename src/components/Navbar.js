import React from "react";
import logo from "../images/movit_logo.svg";
import useStyles from "../styles/NavbarStyles";
import Searchbar from "./Searchbar";
import LanguageChanger from "./LanguageChanger";
import { Link } from "react-router-dom";

export default function Navbar() {
  const classes = useStyles();
  const handleResize = () => {
    if (window.innerWidth > 1360) {
      document.querySelector("html").style.fontSize = "24px";
    } else {
      document.querySelector("html").style.fontSize = "";
    }
  };
  handleResize();
  window.addEventListener("resize", handleResize);
  return (
    <div className={classes.navbardiv}>
      <Link to="/#/">
        <img alt="Logo" src={logo} />
      </Link>
      <LanguageChanger className={classes.lang} />
      <Searchbar />
    </div>
  );
}
