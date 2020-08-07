import React from "react";
import useStyles from "../styles/MainPageStyles";
import logo from "../images/movit_logo.svg";

export default function MainPage() {
  const classes = useStyles();
  return (
    <div className={classes.mainSection}>
      <img src={logo}></img>
      <h3>Trending now</h3>
    </div>
  );
}
