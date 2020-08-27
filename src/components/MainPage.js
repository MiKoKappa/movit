import React from "react";
import useStyles from "../styles/MainPageStyles";
import TrendingMovies from "./TrendingMovies";
import IconButton from "./IconButton";
import Signatures from "./Signatures";

export default function MainPage() {
  const classes = useStyles();
  localStorage.getItem("lang") === "en"
    ? (document.title = "MOVit | Main Page")
    : (document.title = "MOVit | Strona Główna");
  return (
    <div className={classes.mainSection}>
      <h3>
        {localStorage.getItem("lang") === "en"
          ? "Trending now"
          : "Zyskujące popularność"}
      </h3>
      <TrendingMovies />
      <Signatures />
    </div>
  );
}
