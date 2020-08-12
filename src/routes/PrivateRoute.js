import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, githubAuth, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (githubAuth.isLoading) {
        return <h2>Loading...</h2>;
      } else if (!githubAuth.isLoggedIn) {
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
