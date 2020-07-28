import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  moviewindowwrapper: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    backgroundPosition: "left",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    background:
      "radial-gradient( circle, rgba(0,0,0,0.2) 0%, rgba(22,22,22,1) 60%) no-repeat left",
    "@media (max-width: 528px)": {
      justifyContent: "start",
      flexDirection: "column",
    },
  },
  signatures: {
    color: "rgba(255,255,255,0.4)",
    position: "absolute",
    fontSize: "10px",
    fontWeight: "400",
    zIndex: "2",
    bottom: "30px",
    right: "50px",
    "@media (max-width: 528px)": {
      position: "initial",
      backgroundColor: "#161616",
      width: "100vw",
      textAlign: "center",
    },
    "& h3": {
      fontSize: "10px",
      fontWeight: "400",
    },
    "& a": {
      textDecoration: "none",
      fontSize: "12px",
      fontWeight: "bold",
      color: "rgba(255,255,255,0.4)",
    },
  },
});
