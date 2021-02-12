import React, { useReducer } from "react";

const LogInContext = React.createContext();

const SET_USER = "SET_USER";
const INJECT_USER = "INJECT_USER";

const initialState = {
  token: "",
  user: "",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return { ...state, token: payload };

    case INJECT_USER:
      return { ...state, user: payload };

    default:
      return state;
  }
};

function AuthContext(props) {
  const [logInState, logInDispatch] = useReducer(reducer, initialState);

  return (
    <LogInContext.Provider
      value={{ state: logInState, dispatch: logInDispatch }}
    >
      {props.children}
    </LogInContext.Provider>
  );
}

export default AuthContext;
