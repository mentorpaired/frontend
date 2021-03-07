import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RatingComments({ rating }) {
  return (
    <div className="user-description--review-rating">
      <div className="user-description--review-rating-stars">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>
      <p className="user-description--review-rating-number">{rating}</p>
    </div>
  );
}

export default RatingComments;
