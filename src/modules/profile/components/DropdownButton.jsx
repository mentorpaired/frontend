import React from "react";
import check from "../../../assets/svg/check.svg";

function DropdownButton({ name, active }) {
  return (
    <button className="user-description--reviews--filter-dropdown-button">
      <div className="user-description--reviews--filter-dropdown-button-check">
        {active && <img src={check} alt="" />}
      </div>
      <p className="user-description--reviews--filter-dropdown-button-text">
        {name}
      </p>
    </button>
  );
}

export default DropdownButton;
