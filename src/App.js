import React, { Component } from "react";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import Test from "./Test";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/login" component={Test} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
