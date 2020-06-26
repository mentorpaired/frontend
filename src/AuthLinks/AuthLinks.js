import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGitlab } from "@fortawesome/free-brands-svg-icons";

const AuthLinks = () => {
  return (
    <div className="auth_links" aria-hidden="true">
      <a href="#" className="github_link">
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
};

export default AuthLinks;
