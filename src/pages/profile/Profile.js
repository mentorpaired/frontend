import React, { Component } from "react";
import "./Profile.css";
import About from "../about/About";
import UserInformation from "../userinformation/UserInformation";

class Profile extends Component {
  render() {
    return (
      <div className="profile_links_container">
        <div className="profile_about_link">
          <About />
        </div>
        <div className="profile_user_info_link">
          <UserInformation />
        </div>
      </div>
    );
  }
}

export default Profile;
