import React from "react";
import useStyles from "../styles/MainPageStyles";
import TrendingMovies from "./TrendingMovies";
import IconButton from "./IconButton";

export default function MainPage() {
  const classes = useStyles();
  return (
    <div className={classes.mainSection}>
      <h3>
        {localStorage.getItem("lang") === "en"
          ? "Trending now"
          : "Zyskujące popularność"}
      </h3>
      <TrendingMovies />
    </div>
  );
}
