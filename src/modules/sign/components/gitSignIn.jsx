import React, {useContext, useState} from "react";
import github from "../../../../src/assets/svg/github.svg";
import activateGithub from "../../../../src/assets/svg/githubActive.svg";
import gitlab from "../../../../src/assets/svg/gitlab.svg";
import activateGitlab from "../../../../src/assets/svg/gitlabActive.svg";
import { StateContext } from "../../../App";

function GitSignIn() {
  const { dispatch } = useContext(StateContext);
  const [githubActive, githubSetActive] = useState(false);
  const [gitlabActive, gitlabSetActive] = useState(false);
  const githubActiveStyles = githubActive ? {border: "1px solid black"} : {};
  const gitlabActiveStyles = gitlabActive ? {border: "1px solid black"} : {};
  const mouseOverGithub = () => githubSetActive(true);
  const mouseOverGitlab = () => gitlabSetActive(true);
  const mouseOutGithub = () => githubSetActive(false);
  const mouseOutGitlab = () => gitlabSetActive(false);
  return (
    <div className="git">
      <a
        href={`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&scope=user`}
        id="button"
        style={githubActiveStyles}
        className="button"
        onClick={() => dispatch({ type: "CLEAR_GITLAB_AUTH"})}
      >
        <img src={githubActive ? activateGithub : github} alt="" />
        <span className="button-text">Continue with GitHub</span>
      </a>
      <br/>
      <a 
        style={gitlabActiveStyles} 
        className="gitlab-button" 
        onMouseOver={mouseOverGitlab} 
        onMouseOut={mouseOutGitlab}
        href={`https://gitlab.com/oauth/authorize?client_id=${process.env.REACT_APP_GITLAB_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_GITLAB_REDIRECT_URI}&response_type=code&scope=read_user+profile`}
        onClick={() => dispatch({ type: "GITLAB_AUTH" })}
      >
        <img src={gitlabActive ? activateGitlab : gitlab} alt="" />
        <span className="button-text">Continue with Gitlab</span>
      </a>
    </div>
  );
}
export default GitSignIn;

