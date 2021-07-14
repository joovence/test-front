import React from "react";
import { useRequest } from "hooks/useRequest";
import { DoctorCard } from "components/DoctorCard";
import { IDoctorCard } from "components/DoctorCard/DoctorCard.interface";
import AvailabilitiesStyle from "./Availabilities.style";

const Availabilities: React.FC = () => {
  const { cardContainer } = AvailabilitiesStyle();
  const { apiData, isLoading } = useRequest("GET", "doctors");

  return (
    <div>
      <header className="header">
        <img src="/joovence-logo.png" className="logo" alt="logo" />
        <h1>Bookings</h1>
      </header>
      {isLoading && <span>Loading.....</span>}

      <div className={cardContainer}>
        {apiData?.map((doctor: IDoctorCard) => (
          <DoctorCard key={doctor?.id} {...doctor} />
        ))}
      </div>
    </div>
  );
};

export default Availabilities;
