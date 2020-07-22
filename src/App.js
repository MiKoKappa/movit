import React from "react";
import Navbar from "./components/Navbar";
import useStyles from "./styles/AppStyles";
import MoviePage from "./components/MoviePage";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const classes = useStyles();
  if (!localStorage.getItem("lang")) {
    localStorage.setItem("lang", "en");
  }
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className={classes.appdiv}>
        <Navbar />
        <Switch>
          <Route path={"/movie/:id"} component={MoviePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
