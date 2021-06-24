// display list of doctors with DoctorListElement  component
import React, { useEffect, useState, Fragment } from "react";
import Doctors from "./DoctorListElement";
import axios, { AxiosResponse } from "axios";


// contact description for each doctor
export interface DoctorInfo {
  id?: string;
  name?: string;
  address?: {
    city?: string;
    country?: string;
    line1?: string;
    line2?: string;
    postalCode?: number;
  };
}
// List of doctors to use as props type
// export type TDoctorList = DoctorInfo[];
export interface TDoctorListProps {
  items?: any;
}

const DoctorList: React.FC<TDoctorListProps> = () => {
  const [doctor, setDoctorList] = useState<TDoctorListProps>([] as any);

  useEffect(() => {
    axios
      .get("https://tech-test.joovence.dev/api/doctors")
      .then((response: AxiosResponse) => {
        console.log(response.data);
        setDoctorList(response.data);
      });
  }, []);

  return (
    <Fragment>
      <Doctors items={doctor} />
    </Fragment>
  );
};
export default DoctorList;
