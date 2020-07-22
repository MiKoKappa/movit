import React from "react";
import useStyles from "../styles/LanguageChangerStyles";

export default function LanguageChanger() {
  const classes = useStyles();
  const handleChange = (e) => {
    localStorage.setItem("lang", e.target.value);
    window.location.reload();
  };
  return (
    <div className={classes.languagewrapper}>
      <button
        className={`${classes.button} 
          ${localStorage.getItem("lang") === "en" ? classes.selected : ""}`}
        value="en"
        onClick={handleChange}
      >
        eng
      </button>
      <span> | </span>
      <button
        className={`${classes.button} 
          ${localStorage.getItem("lang") === "pl" ? classes.selected : ""}`}
        value="pl"
        onClick={handleChange}
      >
        pol
      </button>
    </div>
  );
}
