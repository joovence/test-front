import { format } from "date-fns";
import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import BookingsStyle from "./Bookings.style";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Button } from "@material-ui/core";

const Bookings = () => {
  const { state } = useLocation<{ name: string; start: string }>();
  const classes = BookingsStyle();
  return (
    <div className={classes.successCard}>
      <CheckCircleIcon fontSize="large" className={classes.successIcon} />
      <h3>Appointment booked Successfully!</h3>
      <p>
        Appointment booked with <strong>{state?.name}</strong>
        <br /> on <strong>{state && format(new Date(state?.start), "d LLL yyyy hh:mma")}</strong>
      </p>
      <Link to="/" className={classes.link}>
        <Button variant="contained" color="primary">
          Back To Home
        </Button>
      </Link>
    </div>
  );
};

export default Bookings;
