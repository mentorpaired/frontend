import React from "react";
import { Link } from "react-router-dom";
import AppName from "./AppName";
import AuthLinks from "../authlinks/AuthLinks";

const Signup = () => {
  return (
    <div>
      <div>
        <AppName />
      </div>

      <div className="centered_div">
        <div className="mid_centered_div">
          <p className="sign_up_text">Sign up</p>
          <p>
            You are one step away from connecting with a mentor or mentee of
            your dreams.
          </p>
        </div>

        <AuthLinks />

        <div className="small_centered_div">
          Already have an account?
          <Link to="/login" className="login_link">
            {" "}
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
