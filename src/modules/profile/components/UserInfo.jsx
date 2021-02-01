import React from "react";
import profileImg from "../../../assets/image/profile-pic.jpg";
import MentorButton from "./MentorButton";
import Rating from "./Rating";
import editIcon from "../../../assets/svg/edit-btn.svg";
import locationIcon from "../../../assets/svg/location.svg";

function UserInfo({ user }) {
  const gMapsAddress = user.address.replace(",", "").replace(" ", "+");

  return (
    <div className="user-info">
      <div className="user-info--pic-container">
        <button className="user-info--edit-btn">
          <img src={editIcon} className={"user-info--edit-btn-icon"} alt="" />
        </button>
        <img src={profileImg} className="user-info--pic" alt="User profile" />
        {user.online && <div className={"user-info--online"} />}
      </div>
      <h2 className="user-info--name">{user.name}</h2>
      <a
        href={`https://www.google.com/maps/place/${gMapsAddress}/`}
        target={"_blank"}
        rel="noreferrer"
        className="user-info--address"
      >
        <div className={"user-info--address-text"}>
          <img
            className={"user-info--map-marker"}
            src={locationIcon}
            alt="Location pin"
          />
          {user.address}
        </div>
      </a>
      <Rating rating={user.rating} section={"user-info"} votes={user.votes} />
      <MentorButton />
    </div>
  );
}

export default UserInfo;
