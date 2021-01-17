import React, { useEffect, useState} from "react";
import github from "../../../../src/assets/svg/github.svg";
import activateGithub from "../../../../src/assets/svg/githubActive.svg";
import gitlab from "../../../../src/assets/svg/gitlab.svg";
import activateGitlab from "../../../../src/assets/svg/gitlabActive.svg";

function GitSignIn() {
  const [githubActive, githubSetActive] = useState(false);
  const [gitlabActive, gitlabSetActive] = useState(false);
  const githubActiveStyles = githubActive
    ? {
      border: "1px solid black",
    }
    : {};
  const gitlabActiveStyles = gitlabActive
    ? {
      border: "1px solid black",
    }
    : {};
  useEffect((e) => {
    console.log(e);
    const githubButton = document.getElementById("button");
    githubButton.addEventListener("mouseover", function github () {
      githubSetActive(true);
    });
    githubButton.addEventListener("mouseout", function github () {
      githubSetActive(false);
    });
    const gitlabButton = document.getElementById("button2");
    gitlabButton.addEventListener("mouseover", function gitlab () {
      gitlabSetActive(true);

    });
    gitlabButton.addEventListener("mouseout", function gitlab () {
      gitlabSetActive(false);
    });
    return () => {
      githubButton.removeEventListener("mouseover", github);
      githubButton.removeEventListener("mouseout", github);
      gitlabButton.removeEventListener("mouseover", gitlab);
      gitlabButton.removeEventListener("mouseout", gitlab);
    };
  }, []);

  return (
    <div className="git">
      <button id="button" style={githubActiveStyles} className="button">
        <img src={githubActive ? activateGithub : github} alt="" />
        <span className="button-text">Continue with GitHub</span>
      </button>

      <br/>

      <button id="button2" style={gitlabActiveStyles} className="button2">
        <img src={gitlabActive ? activateGitlab : gitlab} alt="" />
        <span className="button-text">Continue with Gitlab</span>
      </button>
    </div>
  );
}

export default GitSignIn;
