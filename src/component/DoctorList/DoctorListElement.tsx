// map of the list of doctors for index
import React from "react";
import styled from "styled-components";
import { TDoctorListProps } from "./index";
import DoctorAvailabilities from "./DoctorAvailabilities";


const Container = styled.ul`
  diplay: flex;
  margin-top: 5rem;
`;

const Row = styled.div`
  &::after {
    content: "";
    clear: both;
  }
`;

export interface Span {
  span: string;
}

const Column = styled.div`
  display: table;
  float: left;
  width: 100%;
  @media only screen and (min-width: 1024px) {
    ${(props: Span) => ``};
    width: ${(props?: any) => (props.span ? (props.span / 12) * 100 : "8.33")}%;
  } ;
`;

const Box = styled.li`
  display: flex;
  flex-wrap: wrap;
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
    width: 100%;
    font-size: 1rem;
  } ;
`;

const Doctors: React.FC<TDoctorListProps> = ({ items }) => {
  return (
    <div>
      <Container>
        {items &&
          items.map((item: any) => (
            <Box key={item.id}>
              <Row>
                <Column span="4">
                  <h3>{item.name}</h3>
                  <p>
                    {item.address.city} ({item.address.country})
                  </p>
                  
                  <p></p>
                  <br />
                </Column>
                <Column span="6">
                  <span>
                    <DoctorAvailabilities test={item.id} name={item.name}/>
                  </span>
                  <br />
                </Column>
                <Column span="2">
                  <p>Book an appointment with:</p><b>{item.name}</b>
                  <br />
                </Column>
              </Row>
            </Box>
          ))}
      </Container>
    </div>
  );
};

export default Doctors;
