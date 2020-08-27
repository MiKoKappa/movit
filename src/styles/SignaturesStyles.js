import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
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
