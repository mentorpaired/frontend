<<<<<<< HEAD
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
=======
import React, { Component } from "react";import "./modules/sign/components/Signin"import Signin from "./modules/sign/components/Signin";class App extends Component {  render() {    return (      <div>        <Signin/>      </div>    );  }}export default App;
>>>>>>> second commit
