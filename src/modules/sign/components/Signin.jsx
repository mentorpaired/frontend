import React from "react";
import Logo from "../icons/logo"
import AmazonLogo from "../icons/amazonlogo";
import AirbnbLogo from "../icons/airbnblogo";
import UberLogo from "../icons/uberlogo";
import MicrosoftLogo from "../icons/mslogo";
import NetflixLogo from "../icons/netflixlogo";
import GitSignIn from "./gitSignIn";
import "./Signin.css";

const SignIn = () => {
  return (
    <div>
    <div>
      <Logo className="svg_logo"/>
    </div>
  <div className="centered_div">
    <div className="mid_centered_div">
      <p className="sign_in_text">Sign In</p>
      <p className="more_text">
        You are one step away from connecting with the mentor or mentee of
        your dreams
      </p>
    </div>
  </div>
        <GitSignIn/>

      <div className="bottom_div">
        <p className="bottom_text">
          Trusted by Tech Companies around the world
        </p>
      </div>
      <div>
        <AmazonLogo className="svg_amazon"/> <AirbnbLogo className="svg_airbnb"/> <UberLogo className="svg_uber"/>
        <NetflixLogo className="svg_netflix"/> <MicrosoftLogo className="svg_microsoft"/>

      </div>
  </div>
)};

export default SignIn;
