import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  button: {
    color: "white",
    background: "none",
    border: "1px rgba(255,255,255,0.8) solid",
    padding: "5px 10px",
    fontSize: "0.6rem",
    textDecoration: "none",
    borderRadius: "30px",
    textAlign: "center",
    margin: "10px",
    "& span": {
      fontWeight: "bold",
      fontSize: "1.2em",
      paddingRight: "5px",
    },
  },
});
