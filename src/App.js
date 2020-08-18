import React from "react";
import Navbar from "./components/Navbar";
import useStyles from "./styles/AppStyles";
import MoviePage from "./components/MoviePage";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import "../node_modules/react-modal-video/scss/modal-video.scss";

function App() {
  const classes = useStyles();
  if (!localStorage.getItem("lang")) {
    localStorage.setItem("lang", "en");
  }
  return (
    <Router>
      <div className={classes.appdiv}>
        <Navbar />
        <Switch>
          <Route path={"/movie/:id"} component={MoviePage} />
          <Route path={"/"} component={MainPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
