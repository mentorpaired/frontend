import React from 'react';
import { Link } from 'react-router-dom';
import IntroductoryMessage from '../Introduction/IntroductoryMessage';
import AuthLinks from '../AuthLinks/AuthLinks';

const Login = () => {
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

                <AuthLinks />

                <div className="small_centered_div">
                    Don't have an account?
                    <Link to="/" className="signup_link"> Sign up</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
