import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { Grid } from "@material-ui/core";
import useStyles from "../styles/TrendingMoviesStyles";

export default function TrendingMovies() {
  const classes = useStyles();
  const [trending, setTrending] = useState({});
  useEffect(() => {
    async function fetchData() {
      await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=ded08fd3869dfc28746b6d46d84e468b&language=${localStorage.getItem(
          "lang"
        )}&sort_by=popularity.desc`
      )
        .then((response) => response.json())
        .then((json) => setTrending(json));
    }
    fetchData();
  }, []);
  return (
    <div>
      <Grid container className={classes.root} justify="center" spacing={3}>
        {trending.results
          ? trending.results.map((movie, i) =>
              i <= 4 ? (
                <Grid key={i} item container xs={6} md={2} justify="center">
                  <MovieCard movie={movie} />
                </Grid>
              ) : (
                ""
              )
            )
          : ""}
      </Grid>
    </div>
  );
}
