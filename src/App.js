import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import UserInformation from "./pages/UserInformation";
import Profile from "./pages/Profile";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route path="/about" component={About} />
          <Route path="/user-info" component={UserInformation} />
          <Route path="/profile" component={Profile} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
