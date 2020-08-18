import React, { useState } from "react";
import useStyles from "../styles/MovieDetailsStyles";
import IconButton from "./IconButton";
import ModalVideo from "react-modal-video";
import buttonClass from "../styles/IconButtonStyles";

export default function MovieDetails(props) {
  const movie = props.movie;
  const trailer = props.trailer;
  const [modalOpen, setModalOpen] = useState(false);
  const classes = useStyles();
  const buttonClasses = buttonClass();
  const openModal = () => {
    setModalOpen(true);
    console.log(trailer);
  };
  // console.log(movie.title ? movie.title.length : "Not given");
  return (
    <div className={classes.moviedetailswrapper}>
      <div className={classes.imagewrapper}>
        <img
          alt="Poster"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
      </div>
      <div className={classes.movieinfoswrapper}>
        <div className={classes.titleblock}>
          <h2
            className={
              parseInt(movie.title.length, 10) > 30 ? classes.titlelong : ""
            }
          >
            {movie.title}
          </h2>
          <h4 className={classes.tagline}>{movie.tagline}</h4>
        </div>
        <div className={classes.ribbon}>
          <h5>
            {movie.genres
              ? movie.genres.map((genre, i) =>
                  i === movie.genres.length - 1
                    ? genre.name
                    : genre.name + " | "
                )
              : ""}
          </h5>
          <h5>{movie.release_date}</h5>
          <h5>
            {movie.vote_average.toFixed(2)} <i class="fas fa-star" />
          </h5>
          {trailer ? (
            <div>
              <ModalVideo
                channel={trailer.site ? trailer.site.toLowerCase() : "youtube"}
                isOpen={modalOpen}
                videoId={trailer.key}
                onClose={() => setModalOpen(false)}
              />
              <button
                className={buttonClasses.button}
                onClick={openModal}
                style={{ cursor: "pointer" }}
              >
                <span>TRAILER</span> <i class="fas fa-play" />
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
        <p className={classes.overview}>
          {movie.overview ? movie.overview : "No data"}
        </p>
      </div>
    </div>
  );
}
