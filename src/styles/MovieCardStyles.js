import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  root: {
    "& img": {
      maxWidth: "100%",
      margin: "0",
      filter: "brightness(90%)",
      transition: "0.3s ease-in",
      "&:hover": {
        filter: "brightness(30%)",
      },
    },
  },
});
