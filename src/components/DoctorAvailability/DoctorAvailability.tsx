import { Button } from "@material-ui/core";
import { format } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";
import { IDoctorAvailability } from "./DoctorAvailability.interface";
import DoctorAvailabilityStyle from "./DoctorAvailability.style";

const DoctorAvailability = ({ data, id, name }: IDoctorAvailability) => {
  const classes = DoctorAvailabilityStyle();
  // const [startDate, setStartDate] = useState<string>();

  // FIXME: i had to ignored that cause im getting error with CORS from server i try to change proxy configs but without success
  // const { apiData, isLoading, execute } = useRequest("POST", `bookings`, false, {
  //   date: startDate,
  //   doctorId
  // });

  const generateDate = (date: string) => {
    const newDate = new Date(date);
    return format(newDate, "yyyy / MM / dd - HH:mm:ss");
  };

  const makeAppointment = (date: string) => {
    // setStartDate(date);
    // execute();
  };

  return (
    <div className={classes.availability}>
      <ul>
        {data.map(({ start }, index) => (
          <li key={index} className={classes.availabilityItem}>
            {generateDate(start)} :
            <Link
              to={{
                pathname: "/bookings",
                state: { start, name },
              }}
            >
              <Button variant="contained" color="primary" onClick={() => makeAppointment(start)}>
                To Schedule
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorAvailability;
