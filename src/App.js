import React from "react";
import "./App.css";
import "./lib/font-awesome/css/all.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Add from "./components/Add";
import Watched from "./components/Watched";
import Watchlist from "./components/Watchlist";

import { GlobalProvider } from "./context/globalState";

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Watchlist} />
          <Route path="/watched" exact component={Watched} />
          <Route path="/add" exact component={Add} />
          <Route path="/" exact component={Watchlist} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
};

export default App;
