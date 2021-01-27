import React, {useState} from "react";
import github from "../../../../src/assets/svg/github.svg";
import activateGithub from "../../../../src/assets/svg/githubActive.svg";
import gitlab from "../../../../src/assets/svg/gitlab.svg";
import activateGitlab from "../../../../src/assets/svg/gitlabActive.svg";

function GitSignIn() {
  const [githubActive, githubSetActive] = useState(false);
  const [gitlabActive, gitlabSetActive] = useState(false);
  const githubActiveStyles = githubActive ? {border: "1px solid black", cursor: "pointer"} : {};
  const gitlabActiveStyles = gitlabActive ? {border: "1px solid black", cursor: "pointer"} : {};
  const mouseOverGithub = () => githubSetActive(true);
  const mouseOverGitlab = () => gitlabSetActive(true);
  const mouseOutGithub = () => githubSetActive(false);
  const mouseOutGitlab = () => gitlabSetActive(false);
  return (
    <div className="git">
      <button style={githubActiveStyles} className="github-button" onMouseOver={mouseOverGithub} onMouseOut={mouseOutGithub}>
        <img src={githubActive ? activateGithub : github} alt="github" />
        <span className="button-text">Continue with GitHub</span>
      </button>
      <br/>
      <button style={gitlabActiveStyles} className="gitlab-button" onMouseOver={mouseOverGitlab} onMouseOut={mouseOutGitlab}>
        <img src={gitlabActive ? activateGitlab : gitlab} alt="gitlab" />
        <span className="button-text">Continue with Gitlab</span>
      </button>
    </div>
  );
}
export default GitSignIn;
