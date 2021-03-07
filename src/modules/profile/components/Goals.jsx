import React from "react";
import editIcon from "../../../assets/svg/edit-btn.svg";
import addIcon from "../../../assets/svg/add-btn.svg";

function Goals({ goals }) {
  return (
    <div className="user-description--goals user-description--section">
      <div className="user-description--goals--header">
        <h2 className="user-description--title">Goals</h2>
        <img
          src={addIcon}
          alt="Add icon"
          className="user-description--goals--add-icon"
        />
      </div>
      <button className="user-description--button"></button>
      {goals.map((goal) => (
        <div
          key={goal.title.toLowerCase().replace(" ", "-")}
          className="user-description--goal"
        >
          <div className="user-description--goal-text">
            <p className="user-description--subtitle">{goal.title}</p>
            <p className="user-description--paragraph">{goal.description}</p>
          </div>
          <button className="user-description--goal-edit-btn">
            <img
              src={editIcon}
              className={"user-description--goal-edit-btn--icon"}
              alt=""
            />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Goals;
