import React from "react";
import { Link } from "react-router-dom";

function Notifications() {
  return (
    <ul className="header-nav">
      <li className="header-nav-item">
        <Link to="#" className="active">
          {" "}
          Requests
        </Link>
        <span className="span-active">24</span>
      </li>
      <li className="header-nav-item">
        <Link to="#" className="">
          {" "}
          Suggestions
        </Link>
        <span className="">24</span>
      </li>
      <li className="header-nav-item">
        <Link to="#" className="">
          {" "}
          Matches
        </Link>
        <span className="">24</span>
      </li>
    </ul>
  );
}

export default Notifications;
