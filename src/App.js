import React from "react";
import Navbar from "./components/Navbar";
import useStyles from "./styles/AppStyles";
import MoviePage from "./components/MoviePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
          <Route
            path={"process.env.PUBLIC_URL" + "/movie/:id"}
            component={MoviePage}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
