import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import DoctorAvailability from "./DoctorAvailability";

describe("Component - DoctorAvailability", () => {
  const propMock = {
    data: [{ start: "2021-08-26T05:49:16.334Z" }],
    id: "anyId",
    name: "anyName"
  };

  let component = (
    <MemoryRouter>
      <DoctorAvailability {...propMock} />;
    </MemoryRouter>
  );

  it("Should Match SnapShot", () => {
    expect(component).toMatchSnapshot();
  });

  it("Should render component", async () => {
    render(component);
  });

  it("Should click at to Schedule button", async () => {
    const { getByText } = render(component);
    const button = getByText("To Schedule");
    fireEvent.click(button);
  });
});
