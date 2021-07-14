import { makeStyles } from "@material-ui/core";

const DoctorAvatarStyle = makeStyles(() => ({
  avatar: {
    margin: 15,
    minWidth: 200,
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  }
}));

export default DoctorAvatarStyle;
