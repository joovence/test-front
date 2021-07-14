import React from "react";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import HomeIcon from "@material-ui/icons/Home";
import MapIcon from "@material-ui/icons/Map";
import { IAddress } from "components/DoctorCard/DoctorCard.interface";
import AddressDetailsStyle from "./AddressDetails.style";

const AddressDetails = ({ city, country, line1, line2, postalCode }: IAddress) => {
  const classes = AddressDetailsStyle();

  return (
    <div className={classes.address}>
      <p>
        <MapIcon />
        <span>{city + ", " + country}</span>
      </p>
      <p>
        <HomeIcon />
        <span>{line1}</span>
      </p>
      <p>
        <LocationCityIcon />
        <span>{line2}</span>
      </p>
      <p>
        <LocationOnIcon />
        <span>{postalCode}</span>
      </p>
    </div>
  );
};

export default AddressDetails;
