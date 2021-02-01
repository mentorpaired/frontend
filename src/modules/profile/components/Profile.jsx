import React from "react";
import MentorButton from "./MentorButton";
import "./profile.styles.scss";
import UserDescription from "./UserDescription";
import UserInfo from "./UserInfo";

export default function Profile({ user }) {
  console.log(user);
  return (
    <div className="profile-container">
      <UserInfo user={user} />
      <UserDescription user={user} />
    </div>
  );
}
