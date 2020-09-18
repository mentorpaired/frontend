import React, { Component } from "react";
import Logout from "../actions/logOutAction";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Logout/>
      </div>
    );
  }
}

export default Dashboard;
