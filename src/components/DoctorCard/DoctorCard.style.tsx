import { makeStyles } from "@material-ui/core";

const DoctorCardStyle = makeStyles(() => ({
  card: {
    width: "100%",
    maxWidth: 750,
    borderBottom: "solid 1px lightgray"
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 20,
    paddingBottom: 0
  },
  buttonAvailabilities: {
    padding: 10,
    margin: 10,
    marginLeft: 20,
    marginRight: 0,
    minWidth: 160
  },
  collapse: {
    padding: 20,
    paddingTop: 0
  },
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

export default DoctorCardStyle;
