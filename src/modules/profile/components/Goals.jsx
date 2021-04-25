import React, { useContext, useState } from "react";
import editIcon from "../../../assets/svg/edit-btn.svg";
import addIcon from "../../../assets/svg/add-btn.svg";
import { StateContext } from "../../../store";
import Goal from "./goal/Goal";

function Goals() {
  const { state } = useContext(StateContext)
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
      {state.goals.map((goal) => (
          <Goal goal={goal}/>
          // {/* <textarea style={{width:"100%"}} name="" id="" cols="30" rows="10"></textarea> */}
      ))}
    </div>
  );
}

export default Goals;
