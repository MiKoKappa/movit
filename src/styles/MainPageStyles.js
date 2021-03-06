import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  mainSection: {
    minHeight: "100vh",
    boxSizing: "border-box",
    maxWidth: "100%",
    backgroundImage:
      "radial-gradient( circle, rgba(140, 10, 10, 0.1) 20%, rgba(22, 22, 22, 1) 60%), url('https://source.unsplash.com/qoFzL-vEM_U')",
    backgroundPosition: "bottom",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 528px)": {
      justifyContent: "flex-start",
    },
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      width: "30vw",
      maxWidth: "400px",
      marginTop: "50px",
    },
  },
});
