import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  root: {
    "& i": {
      margin: "-1rem",
      fontSize: "2rem",
      fontWeight: "bold",
      position: "absolute",
      top: "50%",
      left: "50%",
      color: "white",
      opacity: "0",
      transition: "0.3s ease-in",
    },
    "& img": {
      maxWidth: "100%",
      margin: "0",
      filter: "brightness(80%)",
      transition: "0.3s ease-in",
      "&:hover": {
        filter: "brightness(25%)",
      },
    },
    "&:hover": {
      "& h3": {
        opacity: "1",
      },
      "& i": {
        opacity: "1",
      },
      "& img": {
        filter: "brightness(25%)",
      },
    },
  },
  title: {
    padding: "10px",
    fontSize: "1rem",
    fontWeight: "bold",
    position: "absolute",
    zIndex: "2",
    bottom: 0,
    left: "10px",
    textAlign: "center",
    color: "white",
    opacity: "0",
    transition: "0.3s ease-in",
  },
});
