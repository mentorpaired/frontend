import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, githubAuth, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (!githubAuth.isAuthenticated) {
        return <Redirect to="/signup" />;
      } else {
        return <Component {...props} />;
      }
    }}
  />
);

const mapStateToProps = (state) => ({
  githubAuth: state.githubAuth,
});

export default connect(mapStateToProps)(PrivateRoute);
