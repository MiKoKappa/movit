import React from "react";
import { useState, useEffect } from "react";
import MovieDetails from "./MovieDetails";
import useStyles from "../styles/MoviePageStyles";

export default function MoviePage(props) {
  const classes = useStyles();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function fetchData() {
      await fetch(
        `https://api.themoviedb.org/3/movie/${
          props.match.params.id
        }?api_key=ded08fd3869dfc28746b6d46d84e468b&language=${localStorage.getItem(
          "lang"
        )}`
      )
        .then((response) => response.json())
        .then((json) => setMovie(json));
    }
    fetchData();
  }, []);
  if (movie.title) {
    document.title = `MOVit | ${movie.title}`;
  } else {
    document.title = "MOVit";
  }
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
    <div className={classes.moviewindowwrapper}>
      {movie.title && window.innerWidth > 528 ? (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            position: "absolute",
            zIndex: "0",
            background: `radial-gradient(circle at 40%, rgba(0,0,0,0.1) 0%, rgba(22,22,22,1) 55%), url(${
              movie.backdrop_path
                ? "https://image.tmdb.org/t/p/original" + movie.backdrop_path
                : ""
            }) no-repeat left`,
            backgroundSize: "contain",
          }}
        ></div>
      ) : (
        ""
      )}
      {movie.title ? <MovieDetails props={movie} /> : ""}
      <div className={classes.signatures}>
        <h3>
          {localStorage.getItem("lang") === "en" ? "Built by" : "Wykonał"}{" "}
          <a href="https://github.com/MiKoKappa">
            Mikołaj Tkaczyk <i class="fab fa-github"></i>
          </a>
        </h3>
        <h3>
          {localStorage.getItem("lang") === "en"
            ? "Data provided by"
            : "Informacje z"}{" "}
          <a href="https://www.themoviedb.org">
            TMDB <i class="fas fa-info"></i>
          </a>
        </h3>
      </div>
    </div>
  );
}
