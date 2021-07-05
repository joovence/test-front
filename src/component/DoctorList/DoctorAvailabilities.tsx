// display availabilities of doctors
import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import Availability from "./AvailabilityElement";

// contact description for each doctor
export interface DoctorAvailabilitie {
  start?: string;
}

// List of doctors to use as props type
// export type TDoctorList = DoctorInfo[];
export interface TAvailabilitiesProps {
  date?: any[];
}



const DoctorAvailabilities: React.FC<any> = ({ test, name }) => {
  const [
    doctorAvailability,
    setDoctorAvailabilities,
  ] = useState<TAvailabilitiesProps>([] as any);

  useEffect(() => {
    axios
      .get(`https://tech-test.joovence.dev/api/availabilities?doctorId=${test}`)
      .then((response: AxiosResponse) => {

        setDoctorAvailabilities(response.data);
      });
  }, [test]);

  return (
    <Availability date={doctorAvailability} doctorId={test} doctorName={name} />
  );
};

export default DoctorAvailabilities;
