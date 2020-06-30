import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import IntroductoryMessage from "./IntroductoryMessage";
import AuthLinks from "../authlinks/AuthLinks";
import githubAuthAction from "../actions/githubAuthAction";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);
    this.checkLoggedInState();
  }

  componentDidMount() {
    const hasCode = window.location.href.includes("?code=");
    if (hasCode) {
      const { githubAuthAction } = this.props;
      const code = window.location.href.split("?code=")[1];
      githubAuthAction(code);
    }
  }

  checkLoggedInState() {
    const { isLoggedIn } = this.props;
    if (isLoggedIn) {
      this.props.history.push("/");
    }
  }

  render() {
    const { isLoading } = this.props;
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

const mapStateToProps = ({ githubAuth: { isLoading, isLoggedIn } }) => {
  return { isLoading, isLoggedIn };
};

const mapDispatchToProps = (dispatch) => ({
  githubAuthAction: (code) => dispatch(githubAuthAction(code)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
