import { Avatar } from "@material-ui/core";
import React from "react";
import DoctorAvatarStyle from "./DoctorAvatar.style";

const DoctorAvatar: React.FC<{ name: string }> = props => {
  const classes = DoctorAvatarStyle();
  return (
    <div className={classes.avatar}>
      <Avatar alt={props.name} />
      {props.name}
    </div>
  );
};

export default DoctorAvatar;
