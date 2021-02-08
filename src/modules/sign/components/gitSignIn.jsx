import React, {useState} from "react";
import github from "../../../../src/assets/svg/github.svg";
import activateGithub from "../../../../src/assets/svg/githubActive.svg";
import gitlab from "../../../../src/assets/svg/gitlab.svg";
import activateGitlab from "../../../../src/assets/svg/gitlabActive.svg";

function GitSignIn() {
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
      >
        <img src={githubActive ? activateGithub : github} alt="" />
        <span className="button-text">Continue with GitHub</span>
      </a>
      <br/>
      <button style={gitlabActiveStyles} className="gitlab-button" onMouseOver={mouseOverGitlab} onMouseOut={mouseOutGitlab}>
        <img src={gitlabActive ? activateGitlab : gitlab} alt="" />
        <span className="button-text">Continue with Gitlab</span>
      </button>
    </div>
  );
}
export default GitSignIn;
