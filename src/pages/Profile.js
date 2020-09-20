import React, { Component } from "react";
import About from "./About";
import UserInformation from "./UserInformation";

class Profile extends Component {
  render() {
    return (
      <div className="profile_container">
        <About className="about_link" />
        <UserInformation className="info_link" />
      </div>
    );
  }
}

export default Profile;
