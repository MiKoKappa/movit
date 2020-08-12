import React from "react";
import { Card, CardActionArea, CardMedia } from "@material-ui/core";
import useStyles from "../styles/MovieCardStyles";
import { Link } from "react-router-dom";

export default function MovieCard(props) {
  const classes = useStyles();
  const movie = props.movie;
  return (
    <Card className={classes.root} raised={true}>
      <Link to={"/movie/" + movie.id}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={movie.title}
            image={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
            title={movie.title}
          />
          <h3 className={classes.title}>{movie.title}</h3>
          <i class="fas fa-info-circle"></i>
        </CardActionArea>
      </Link>
    </Card>
  );
}
