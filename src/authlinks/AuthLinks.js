import React, { Component } from "react";
import "../pages/signup_login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGitlab } from "@fortawesome/free-brands-svg-icons";

const client_id = process.env.REACT_APP_CLIENT_ID;
const redirect_uri = process.env.REACT_APP_REDIRECT_URI;

console.log('ENVS: ', process.env);

class AuthLinks extends Component {
  render() {
    return (
      <div className="auth_links" aria-hidden="true">
        <a
          href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}
          className="github_link"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" className="fab_github" />
          &nbsp; Continue with Github
        </a>
        <br />

        <a href="#" className="gitlab_link">
          <FontAwesomeIcon icon={faGitlab} size="2x" className="fab_gitlab" />
          &nbsp; Continue with Gitlab
        </a>
      </div>
    );
  }
}

export default AuthLinks;
