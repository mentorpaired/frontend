import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { logIn } from "../../../actions/auth.actions";
import { StateContext } from "../../../App";
import GitSignIn from "../components/gitSignIn";



const LogInContainer = (props) => {
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

export default LogInContainer;
