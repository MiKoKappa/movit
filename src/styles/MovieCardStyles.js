import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  root: {
    "& i": {
      display: "block",
      textAlign: "center",
      fontSize: "2rem",
      fontWeight: "bold",
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
        transform: "translateY(0px)",
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
    position: "relative",
    zIndex: "2",
    textAlign: "center",
    color: "white",
    opacity: "0",
    transition: "0.3s ease-in",
    transform: "translateY(20px)",
  },
  infobox: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    transition: "0.3s ease-in",
  },
});
