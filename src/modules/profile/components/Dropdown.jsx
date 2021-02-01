import React from "react";
import DropdownButton from "./DropdownButton";

function Dropdown({ dropdownDisplay, handleClick }) {
  const dropdownStyles = {
    display: dropdownDisplay ? "none" : "block",
  };
  return (
    <div className="user-description--reviews-filter">
      <svg
        className="user-description--reviews-filter-icon"
        onClick={handleClick}
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="16.0001" r="16" fill="white" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 14C8.9 14 8 14.9 8 16C8 17.1 8.9 18 10 18C11.1 18 12 17.1 12 16C12 14.9 11.1 14 10 14ZM22 14C20.9 14 20 14.9 20 16C20 17.1 20.9 18 22 18C23.1 18 24 17.1 24 16C24 14.9 23.1 14 22 14ZM14 16C14 14.9 14.9 14 16 14C17.1 14 18 14.9 18 16C18 17.1 17.1 18 16 18C14.9 18 14 17.1 14 16Z"
          fill="#03A5FF"
        />
      </svg>
      <div
        id={"dropdown"}
        style={dropdownStyles}
        className="user-description--reviews--filter-dropdown"
      >
        <DropdownButton name="Newest First" active={true} />
        <DropdownButton name="Oldest First" active={false} />
        <DropdownButton name="Highest Rated" active={false} />
        <DropdownButton name="Oldest Rated" active={false} />
      </div>
    </div>
  );
}

export default Dropdown;
