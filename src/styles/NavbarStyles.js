import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  navbardiv: {
    "& img": {
      margin: "0px",
      "@media (max-width: 528px)": {
        maxWidth: "150px",
      },
    },
    zIndex: "2",
    margin: "40px 50px",
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "calc(100% - 100px)",
    "@media (max-width: 528px)": {
      padding: "20px",
      margin: "0 auto",
      flexDirection: "column",
      alignContent: "space-between",
      position: "initial",
    },
  },
});
