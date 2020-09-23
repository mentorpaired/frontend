import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import About from "./pages/about/About";
import UserInformation from "./pages/userinformation/UserInformation";
import Profile from "./pages/profile/Profile";
import PrivateRoute from "./routes/PrivateRoute";
import Logout from "./components/Logout";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Logout/>
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
