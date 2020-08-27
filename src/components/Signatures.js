import React from "react";
import useStyles from "../styles/SignaturesStyles";

export default function Signatures() {
  const classes = useStyles();
  return (
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
  );
}
