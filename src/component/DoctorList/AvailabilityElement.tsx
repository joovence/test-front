// template availability for DoctorAvailabilities
import React from "react";
import Moment from "react-moment";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const DateText = styled.span`
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  font-size: 14px;
`;

const Availability: React.FC<any> = ({ date, doctorId, doctorName }) => {
  //order date
  const dateOrder = date.sort(function (a: any, b: any) {
    var dateA: any = new Date(a.start);
    var dateB: any = new Date(b.start);
    return dateA - dateB;
  });

  return (
    <div>
      {dateOrder.map((item: any) => (
        <Link
          to={{
            pathname: "/Bookings",
            state: {
              date: item.start,
              doctorId: doctorId,
              doctorName: doctorName,
            },
          }}
        >
          <DateText>
            <Moment format="YYYY/MM/DD" date={item.start} />
          </DateText>
          <Button>
            <Moment date={item.start} format="hh:mm" />
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default Availability;
