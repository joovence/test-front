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

//const test:string = "18635ed2-3822-466d-8bde-400a3f5aef17"

const DoctorAvailabilities: React.FC<any>= ({test}) => {
  const [
    doctorAvailability,
    setDoctorAvailabilities,
  ] = useState<TAvailabilitiesProps>([] as any);

  useEffect(() => {
    axios
      .get(`https://tech-test.joovence.dev/api/availabilities?doctorId=${test}`)
      .then((response: AxiosResponse) => {
        console.log("setDoctorAvailabilities", response.data);
        setDoctorAvailabilities(response.data);
      });
  }, [test]); 

  return <Availability date={doctorAvailability} doctorId={test}/>;
};

export default DoctorAvailabilities;
