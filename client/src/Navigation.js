// Navigation.js
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./MainPage";
import PlayPage from "./PlayPage";

function Navigation() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* Route for Student Login */}
          <Route path="/MainPage" component={MainPage} />
          {/* Route for Student Dashboard */}
          <Route path="/PlayPage" component={PlayPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default Navigation;
