import React, { useState } from "react";
import { Button, Collapse } from "@material-ui/core";
import DoctorCardStyle from "./DoctorCard.style";
import { IDoctorCard } from "./DoctorCard.interface";
import { useRequest } from "hooks/useRequest";
import { AddressDetails } from "components/AddressDetails";
import { DoctorAvatar } from "components/DoctorAvatar";
import { DoctorAvailability } from "components/DoctorAvailability";

const DoctorCard: React.FC<IDoctorCard> = (props) => {
  const { id, address, name } = props;
  const classes = DoctorCardStyle();
  const [open, setOpen] = useState(false);
  const { apiData, isLoading, execute } = useRequest("GET", `availabilities?doctorId=${id}`, false);

  const handleClick = () => {
    setOpen(!open);
    if (apiData.length === 0) execute();
  };

  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <DoctorAvatar name={name} />
        <AddressDetails {...address} />
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClick}
          className={classes.buttonAvailabilities}
        >
          Availabilities
        </Button>
      </div>

      <div className={classes.collapse}>
        {isLoading && <span>Loading.....</span>}

        <Collapse in={open} timeout="auto" unmountOnExit>
          <DoctorAvailability data={apiData} {...props} />
        </Collapse>
      </div>
    </div>
  );
};

export default DoctorCard;
