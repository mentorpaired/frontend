import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import IntroductoryMessage from "./IntroductoryMessage";
import AuthLinks from "../authlinks/AuthLinks";
import githubAuthAction from "../actions/githubAuthAction";
import { connect } from "react-redux";

class Login extends Component {
  componentDidMount() {
    const hasCode = window.location.href.includes("?code=");
    if (hasCode) {
      const { githubAuthAction } = this.props;
      const code = window.location.href.split("?code=")[1];
      githubAuthAction(code);
    }
  }

  render() {
    const { isLoading, isAuthenticated } = this.props;
    if (isAuthenticated) return <Redirect to="/" />;
    return (
      <div>
        <div>
          <IntroductoryMessage />
        </div>

        <div className="centered_div">
          <div className="mid_centered_div">
            <p className="log_in_text">Log in</p>
            <p>Some more interesting text</p>
          </div>

          {isLoading ? <span>Logging in...</span> : <AuthLinks />}

          <div className="small_centered_div">
            Don't have an account?
            <Link to="/signup" className="signup_link">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ githubAuth: { isLoading, isAuthenticated } }) => {
  return { isLoading, isAuthenticated };
};

const mapDispatchToProps = (dispatch) => ({
  githubAuthAction: (code) => dispatch(githubAuthAction(code)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
