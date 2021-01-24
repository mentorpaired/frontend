import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import SignIn from "./modules/sign/components/Signin";
import { createContext } from "react";
import { useReducer } from "react";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={DashboardPage} />
          <Route path="/profile" component={DashboardPage} />
          <Route path="/messages" component={DashboardPage} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
