import React from "react";
import useStyles from "../styles/MainPageStyles";
import TrendingMovies from "./TrendingMovies";

export default function MainPage() {
  const classes = useStyles();
  return (
    <div className={classes.mainSection}>
      <h3>Trending now</h3>
      <TrendingMovies />
    </div>
  );
}
