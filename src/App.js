import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={DashboardPage} />
            <Route path="/profile" component={DashboardPage} />
            <Route path="/messages" component={DashboardPage} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
