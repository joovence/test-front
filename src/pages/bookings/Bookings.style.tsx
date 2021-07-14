import { makeStyles } from "@material-ui/core";

const BookingsStyle = makeStyles(() => ({
  successCard: {
    textAlign: "center",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  successIcon: {
    color: "green"
  },
  link: {
    textDecoration: "none"
  }
}));

export default BookingsStyle;
