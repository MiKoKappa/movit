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
      fontSize: "2rem",
      fontWeight: "bold",
      margin: "0",
      "@media (max-width: 528px)": {
        fontSize: "2rem",
        textAlign: "center",
        marginTop: "2rem",
      },
    },
    "& h4": {
      fontSize: "1.4rem",
      fontWeight: "bold",
      margin: "0",
      "@media (max-width: 528px)": {
        fontSize: "1rem",
        fontWeight: "400",
      },
    },
    paddingBottom: "1rem",
  },
  imagewrapper: {
    borderRight: "1px rgba(255,255,255,0.8) solid",
    "& img": {
      maxWidth: "40vh",
      borderRadius: "30px",
      boxShadow: "10px 20px 20px rgba(0,0,0,0.7)",
      margin: "0 50px",
      "@media (max-width: 528px)": {
        maxWidth: "80vw",
        margin: "2rem 0",
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
    paddingBottom: "1rem",
    "@media (max-width: 528px)": {
      flexDirection: "column",
      margin: "2rem 0",
    },
    "& h5": {
      fontSize: "0.7rem",
      fontWeight: "400",
      margin: "0",
    },
  },
  movieinfoswrapper: {
    margin: "0 50px",
    width: "40vw",
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
    fontSize: "0.8rem",
    textAlign: "justify",
    "@media (max-width: 528px)": {
      padding: "5%",
    },
  },
  titlelong: {
    fontSize: "1.6rem!important",
  },
  tagline: {
    fontSize: "0.8rem",
    "@media (max-width: 528px)": {
      textAlign: "center",
      padding: "0 10px",
    },
  },
});
