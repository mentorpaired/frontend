import { axiosInstance } from "../modules/sign/components/axiosApi";
import { authorizeUser } from "../utils/misc.utils";

export const logIn = async function (token, dispatch, history, isGitlab) {
    try {
        dispatch({ type: "LOGIN" })
        const authEndPoint = isGitlab ? 'gitlab_auth' : 'github_auth';
        const response = await axiosInstance.post(
            `http://mentorpaired-staging-backend.herokuapp.com/${authEndPoint}/`,
            { code: token }
        );
        authorizeUser(response, dispatch)
        history.push("/");
    } catch (error) {
        localStorage.setItem("loggedIn", false);
        dispatch({ type: "LOGIN_FAILED", payload: error });
    }
};