import React, { Component } from "react";
import "./UserInformation.css";
import { Link } from "react-router-dom";

class UserInformation extends Component {
  render() {
    return (
      <div className="user_info_container">
        <Link to="/" className="dashboard_link">
          Dashboard
        </Link>
        <Link to="#" className="edit_profile_link">
          Edit Profile
        </Link>
      </div>
    );
  }
}

export default UserInformation;
