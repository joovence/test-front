import { makeStyles } from "@material-ui/core";

const DoctorAvailabilityStyle = makeStyles(() => ({
  availability: {
    marginTop: 10
  },
  availabilityItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5
  }
}));

export default DoctorAvailabilityStyle;
