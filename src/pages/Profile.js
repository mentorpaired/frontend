import React, { Component } from "react";
import About from "./About";
import UserInformation from "./UserInformation";

class Profile extends Component {
  render() {
    return (
      <div className="profile_links_container">
        <div>
          <About />
        </div>
        <div>
          <UserInformation />
        </div>
      </div>
    );
  }
}

export default Profile;
