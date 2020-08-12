import React from "react";
import { useState, useEffect } from "react";
import useStyles from "../styles/SearchbarStyles";
import { Link } from "react-router-dom";

export default function Searchbar() {
  const classes = useStyles();
  const [results, setResults] = useState({});
  const [query, setQuery] = useState();

  useEffect(() => {
    async function fetchData() {
      await fetch(
        "https://api.themoviedb.org/3/search/movie?api_key=ded08fd3869dfc28746b6d46d84e468b&query=" +
          query +
          "&language=" +
          localStorage.getItem("lang")
      )
        .then((response) => response.json())
        .then((json) => setResults(json));
    }
    if (query && query.length > 1) {
      fetchData();
    } else {
      setResults({});
    }
    console.log(results);
  }, [query]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className={classes.inputfield}>
      <input
        placeholder={
          localStorage.getItem("lang") === "en" ? "Search..." : "Szukaj..."
        }
        type="text"
        value={query}
        onChange={handleChange}
      />
      {window.innerWidth > 528 ? (
        <i
          class="fas fa-search"
          style={{ marginLeft: "-40px", marginRight: "40px" }}
        ></i>
      ) : (
        ""
      )}
      <ul>
        {results.results
          ? results.results.map((result, i) => {
              if (i < 8) {
                return (
                  <Link to={"/movie/" + result.id}>
                    <li>
                      {result.title}{" "}
                      {result.release_date
                        ? "(" + result.release_date.substring(0, 4) + ")"
                        : "(Undefined)"}
                    </li>
                  </Link>
                );
              }
            })
          : ""}
      </ul>
    </div>
  );
}
