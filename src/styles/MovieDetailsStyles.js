import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  moviedetailswrapper: {
    zIndex: "1",
    display: "flex",
    flexDirection: "row",
    padding: "0 50px",
    "@media (max-width: 528px)": {
      padding: "0",
      flexDirection: "column",
      backgroundColor: "#161616",
    },
  },
  titleblock: {
    "& h2": {
      fontSize: "70px",
      fontWeight: "bold",
      margin: "0",
      "@media (max-width: 528px)": {
        fontSize: "40px",
        textAlign: "center",
      },
    },
    "& h4": {
      fontSize: "35px",
      fontWeight: "bold",
      margin: "0",
      "@media (max-width: 528px)": {
        fontSize: "20px",
      },
    },
    paddingBottom: "40px",
  },
  imagewrapper: {
    borderRight: "1px rgba(255,255,255,0.8) solid",
    "& img": {
      maxWidth: "360px",
      borderRadius: "30px",
      boxShadow: "10px 20px 20px rgba(0,0,0,0.7)",
      margin: "0 50px",
      "@media (max-width: 528px)": {
        maxWidth: "80vw",
        margin: "10px 0",
      },
    },
    display: "flex",
    alignItems: "center",
    "@media (max-width: 528px)": {
      borderRight: "none",
      borderBottom: "1px rgba(255,255,255,0.8) solid",
      justifyContent: "center",
    },
  },
  ribbon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px rgba(255,255,255,0.8) solid",
    paddingBottom: "20px",
    "@media (max-width: 528px)": {
      flexDirection: "column",
    },
    "& h5": {
      fontSize: "16px",
      fontWeight: "400",
      margin: "0",
    },
    "& a": {
      color: "white",
      border: "1px rgba(255,255,255,0.8) solid",
      padding: "5px 10px",
      fontSize: "12px",
      textDecoration: "none",
      borderRadius: "30px",
      textAlign: "center",
      "& span": {
        fontWeight: "bold",
        fontSize: "1.2em",
        paddingRight: "5px",
      },
    },
  },
  movieinfoswrapper: {
    margin: "0 50px",
    width: "30vw",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    "@media (max-width: 528px)": {
      width: "100vw",
      margin: "0",
    },
  },
  overview: {
    fontSize: "18px",
    "@media (max-width: 528px)": {
      padding: "10px",
    },
  },
  titlelong: {
    fontSize: "50px!important",
  },
  tagline: {
    "@media (max-width: 528px)": {
      textAlign: "center",
      padding: "0 10px",
    },
  },
});
