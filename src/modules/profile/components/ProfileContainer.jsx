import React, { useContext } from "react";
import Profile from "./Profile";
import { UserContext } from "../../../App";

function ProfileContainer() {
  const context = useContext(UserContext);

  return <Profile user={context.state.user} />;
}

export default ProfileContainer;
