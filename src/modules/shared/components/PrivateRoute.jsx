import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { StateContext } from "../../../App";


const PrivateRoute = ({ component: Component, ...rest }) => {
    const State = useContext(StateContext)
    return (
    <Route
        {...rest}
        render={(props) =>
        State.loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to="/signin" />
        )
        }
    />
)};



export default PrivateRoute;
