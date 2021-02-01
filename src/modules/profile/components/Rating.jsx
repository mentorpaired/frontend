import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Rating({ rating, section, votes }) {
  return (
    <div
      id={"rating-container"}
      className={
        "user-info--rating " +
        (section === "user-description" && section + "--rating")
      }
    >
      <p className="user-info--rating-number">{rating}</p>
      <div className="user-info--rating-stars">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>

      {section === "user-info" ? (
        <p className="user-info--rating-votes">{`(${votes})`}</p>
      ) : (
        <p className="user-info--rating-votes">{`(${votes} reviews)`}</p>
      )}
    </div>
  );
}

export default Rating;
