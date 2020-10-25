import React, { useEffect } from "react";
import "../stylesheets/App.scss";
import "../stylesheets/reset.scss";
import "./Landing";
import Landing from "./Landing";
import { Switch, Route } from "react-router-dom";
import Curriculum from "./Curriculum";
import Proyects from "./Proyects";
import Contact from "./Contact";
import StaticLanding from "./StaticLanding";

function App() {
  useEffect(() => {
    sessionStorage.setItem("alreadyVisited", "true");
  });

  return (
    <div className="App">
      <Switch>
        {sessionStorage.getItem("alreadyVisited") === "true" && (
          <Route exact path="/" component={StaticLanding} />
        )}
        {sessionStorage.getItem("alreadyVisited") !== "true" && (
          <Route exact path="/" component={Landing} />
        )}
        <Route exact path="/curriculum" component={Curriculum} />
        <Route exact path="/proyects" component={Proyects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/home" component={StaticLanding} />
      </Switch>
    </div>
  );
}

export default App;
