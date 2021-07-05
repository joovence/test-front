// booking page to display info and to book for a dateTime

import styled from "styled-components";
import Moment from "react-moment";
import ButtonResponse from "./ButtonResponse";
import DoctorContact from "../DoctorList/index";

const Container = styled.div`
  diplay: flex;
  margin-top: 5rem;
`;

const Box = styled.div`
  font-size: 1.1rem;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 3px solid silver;
  border-radius: 3px;
  list-style: none;
  @media only screen and (max-width: 768px) {
    width: 95%;
    font-size: 2rem;
  } ;
`;
// props from AvalabilityElement
const Bookings: React.FC<any> = (props: any) => {
  const date: string = props.location.state.date && props.location.state.date;
  const doctorName: string =
    props.location.state.doctorName && props.location.state.doctorName;
  const doctorId: string =
    props.location.state.doctorId && props.location.state.doctorId;
  return (
    <Container>
      <Box>
        <h2>{doctorName}</h2>
        <DoctorContact item={doctorName} />
        <p>
          Click on button to book to:{" "}
          <ButtonResponse params={{ date: date, doctorId: doctorId }} />
        </p>
        <p>
          Date: <Moment format="YYYY/MM/DD" date={date} />
        </p>
        <p>
          Hour: <Moment format="HH:mm:ss" date={date} />
        </p>
      </Box>
    </Container>
  );
};

export default Bookings;
