// display list of doctors with DoctorListElement  component
import React, { useEffect, useState, Fragment } from "react";
import Doctors from "./DoctorListElement";
import Doc from "./DocElement";
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
  items?: DoctorInfo[];
}

const DoctorList: React.FC<any> = (doctorId: any) => {
  const [doctor, setDoctorList] = useState<any>([]);

  useEffect(() => {
    axios
      .get("https://tech-test.joovence.dev/api/doctors")
      .then((response: AxiosResponse) => {
        setDoctorList(response.data);
      });
  }, []);

  if (doctorId.item) {
    const r = doctor.filter((e: any) => e.name === doctorId.item);

    return (
      <Fragment>
        <Doc item={r} />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Doctors items={doctor} />
    </Fragment>
  );
};
export default DoctorList;
