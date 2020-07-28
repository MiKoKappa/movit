import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  inputfield: {
    "& i": {
      fontSize: "0.7rem",
    },
    "& input": {
      fontSize: "0.7rem",
      fontWeight: "bold",
      width: "300px",
      padding: "10px 20px",
      border: "none",
      backgroundColor: "#393939",
      borderRadius: "30px",
      color: "white",
      outline: "none",
      "@media (max-width: 528px)": {
        width: "200px",
        margin: "5px 0",
      },
    },
    "& ul": {
      margin: "20px 0",
      padding: "0",
      position: "absolute",
      backgroundColor: "#393939",
      width: "calc(300px + 10px)",
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      borderRadius: "30px",
      zIndex: "2",
      "@media (max-width: 528px)": {
        width: "calc(200px + 10px)",
      },
      "& a": {
        color: "white",
        textDecoration: "none",
        borderTop: "0.5px solid white",
        cursor: "pointer",
        "& li": {
          padding: "10px 20px",
          fontSize: "0.6rem",
        },
      },
      "& a:hover": {
        backgroundColor: "#292929",
      },
      "& a:first-child": {
        borderTop: "none",
        borderRadius: "30px 30px 0 0",
      },
      "& a:last-child": {
        borderRadius: "0 0 30px 30px",
      },
      "& a:only-child": {
        borderRadius: "30px",
      },
    },
  },
});
