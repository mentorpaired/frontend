import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { StateContext } from "../../../App";
import { axiosInstance } from "../components/axiosApi";
import GitSignIn from "../components/gitSignIn";

const logIn = async function (token, dispatch, history, isGitlab) {
    if(isGitlab){
        try {
            console.log("gitlab");
            dispatch({ type: "LOGIN" })
            const response = await axiosInstance.post(
            "http://mentorpaired-staging-backend.herokuapp.com/gitlab_auth/",
            { code: token }
            );
            console.log(response);
            axiosInstance.defaults.headers["Authorization"] =
            "JWT " + response.data.jwt.access;
    
            localStorage.setItem("access_token", response.data.jwt.access);
            localStorage.setItem("refresh_token", response.data.jwt.refresh);
            localStorage.setItem("loggedIn", true);
    
            console.log("Logged in");
    
            dispatch({ type: "LOGIN_SUCCESS", payload: response.data.user });
            console.log(history);
            history.push("/");
        } catch (error) {
            localStorage.setItem("loggedIn", false);
    
            dispatch({ type: "LOGIN_FAILED", payload: error });
        }
    } else {
        try {
            console.log("github");
            dispatch({ type: "LOGIN" });
        
            const response = await axiosInstance.post(
            "http://mentorpaired-staging-backend.herokuapp.com/github_auth/",
            { code: token }
            );
            console.log(response);
            axiosInstance.defaults.headers["Authorization"] =
            "JWT " + response.data.jwt.access;
    
            localStorage.setItem("access_token", response.data.jwt.access);
            localStorage.setItem("refresh_token", response.data.jwt.refresh);
            localStorage.setItem("loggedIn", true);
    
            console.log("Logged in");
    
            dispatch({ type: "LOGIN_SUCCESS", payload: response.data.user });
            console.log(history);
            history.push("/");
        } catch (error) {
            localStorage.setItem("loggedIn", false);
    
            dispatch({ type: "LOGIN_FAILED", payload: error });
        }
    }
    };

const GitHubLogInContainer = (props) => {
    const {  dispatch } = useContext(StateContext);
    const history = useHistory();
    useEffect(() => {
        const url = window.location.href;
        if (url.includes("code")) {
            const token = url.slice(url.indexOf("=") + 1);
            const isGitlab = localStorage.auth === "gitlab"
            logIn(token, dispatch, history, isGitlab);
            }
    }, []);

    return <GitSignIn />;
};

export default GitHubLogInContainer;
