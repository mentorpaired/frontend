import React from "react";

function AboutMe({ position, aboutme }) {
  return (
    <div className="user-description--aboutme user-description--section">
      <div className="user-description--header">
        <h2 className="user-description--title">About me</h2>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className={"user-description--aboutme--edit-btn"}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="16" cy="16" r="16" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.0301 8C20.8079 8 20.5768 8.08889 20.4079 8.25778L18.7812 9.88445L22.1146 13.2178L23.7412 11.5911C24.0879 11.2444 24.0879 10.6844 23.7412 10.3378L21.6612 8.25778C21.4835 8.08 21.2612 8 21.0301 8ZM17.8307 13.3511L18.6485 14.1689L10.5951 22.2222H9.77734V21.4044L17.8307 13.3511ZM8 20.6667L17.8311 10.8355L21.1644 14.1689L11.3333 24H8V20.6667Z"
            fill="#03A5FF"
          />
        </svg>
      </div>
      <button className="user-description--button"></button>
      <p className="user-description--subtitle">{position}</p>
      <p className="user-description--paragraph">{aboutme}</p>
    </div>
  );
}

export default AboutMe;
