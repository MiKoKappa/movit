import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  moviewindowwrapper: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "flex-end",
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
});
