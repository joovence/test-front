// display list of doctors with DoctorListElement  component
import React, { useState, Fragment } from "react";
import axios, { AxiosResponse } from "axios";
import styled from "styled-components";

const Button = styled.button`
  padding: 5px 12px;
  margin-right: 3px;
  margin-left: 3px;
  margin-bottom: 2px;
  color: white;
  font-size: 12px;
  font-weight: 700;
  background-color: #ee737f;
  border: 0px;
  border-radius: 3px;
  appearance: none;
  cursor: pointer;
  &:hover {
    background-color: red;
  }
`;
// response interface after post query
export interface BookingResponse {
  id: string;
  doctorId: string;
  date: string;
  createdAt: string;
  updatedAt: string;
}

export interface Response {
  response: string;
}

const ButtonResponse: React.FC<any> = (params: any) => {
  const [response, setResponse] = useState<BookingResponse>([] as any);
console.log("query params to confirm booking", params)
  const postBooking = async () => {
    try {
      const response = await axios
        .post("https://tech-test.joovence.dev/api/bookings/", {
          headers: { "Access-Control-Allow-Origin": "*" },
          params,
        })
        .then((response: AxiosResponse) => {
          setResponse(response.data);
        });
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  return (
    <Fragment>
      <Button onClick={() => postBooking()}>Book</Button>
      {response ? response : null}
    </Fragment>
  );
};
export default ButtonResponse;
