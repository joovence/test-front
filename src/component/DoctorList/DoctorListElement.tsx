// map of the list of doctors for getDataApi/DoctorsList
import React from "react";
import styled from "styled-components";
import { TDoctorListProps, DoctorInfo } from "./index";

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
  @media only screen and (min-width: 768px) {
    ${(props: Span) => ``};
    width: ${(props?: any) => (props.span ? (props.span / 12) * 100 : "8.33")}%;
  } ;
`;

const Box = styled.li`
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 3px solid silver;
  border-radius: 3px;
  list-style: none;
`;

const Doctors: React.FC<TDoctorListProps> = ({ items }) => {
  console.log(
    "items",
    items.map((item: any) => item.address.line1)
  );
  return (
    <div>
      <Container>
        {items &&
          items.map((item: any) => (
            <Box key={item.id}>
              <Column span="5">
                <h3>{item.name}</h3>
                <p>{item.address.line1}</p>
                <p>{item.address.line2}</p>
                <p>{item.address.postalCode}</p>
                <p>{item.address.city} ({item.address.country})</p>
                <p></p>
                <br />
              </Column>
              <Column span="5">
                <span>{item.name}</span>
                <br />
              </Column>
              <Column span="2">
                <span>{item.name}</span>
                <br />
              </Column>
            </Box>
          ))}
      </Container>
    </div>
  );
};

export default Doctors;
