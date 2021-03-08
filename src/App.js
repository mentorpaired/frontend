import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import SignIn from "./modules/sign/components/Signin";
import { createContext } from "react"
import { useReducer} from "react"
import PrivateRoute from "./modules/shared/components/PrivateRoute";


const reducer = (state, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      return { ...state, loading: true };

    case "LOGIN_SUCESS":
      return { ...state, user: payload, loading: false };

    case "LOGIN_FAILED":
      return { ...state, user: {}, error: payload, loading: false };

    default:
      return state
  }
};

const initialState = {
  loggedIn: localStorage.getItem("loggedIn"),
  user: {},
  loading: false,
  error: "",
  isGitlabAuth: false
};

export const StateContext = createContext(initialState)

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

    return (
      <StateContext.Provider value={{ state: state, dispatch: dispatch }}>
        <BrowserRouter>
            <Switch>
              <PrivateRoute exact path="/" component={DashboardPage} />
              <PrivateRoute path="/profile" component={DashboardPage} />
              <PrivateRoute path="/messages" component={DashboardPage} />
              <Route path="/signin" component={SignIn} />
            </Switch>
        </BrowserRouter>
      </StateContext.Provider>
    );
}

export default App;
