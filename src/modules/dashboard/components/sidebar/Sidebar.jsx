import React from 'react';
import "./sidebar.styles.css"
import { Link, withRouter } from "react-router-dom"
import { ReactComponent as Logo } from "../../../../assets/svg/logo.svg"
import DashboardIcon from '../sidebar-icons/DashboardIcon';
import ProfileIcon from '../sidebar-icons/ProfileIcon';
import MessageIcon from '../sidebar-icons/MessageIcon';


const Sidebar = (props) => {
  console.log(props, "props")
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <Link to="#" className="sidebar-brand">
            <Logo/>
          </Link>
        </div>
      </div>
      <div className="sidebar-body ps">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/">
              <DashboardIcon active={props.match.url === "/" ? true : false}/>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile">
              <ProfileIcon active={props.match.url === "/profile" ? true : false}/>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/messages">
              <MessageIcon active={props.match.url === "/messages" ? true : false}/>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default withRouter(Sidebar);
