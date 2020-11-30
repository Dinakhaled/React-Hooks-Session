import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/aboutus" component={AboutUs} />
      </Switch>
    </main>
  );
};

export default App;
