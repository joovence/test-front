import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import routeData from "react-router";
import Bookings from "./Bookings";

const mockLocation = {
  pathname: "/welcome",
  hash: "",
  search: "",
  state: { name: "some name", start: "2021-08-26T05:49:16.334Z" }
};

describe("Component - Bookings", () => {
  let component = (
    <MemoryRouter>
      <Bookings />
    </MemoryRouter>
  );

  beforeEach(() => {
    jest.spyOn(routeData, "useLocation").mockReturnValue(mockLocation);
  });

  it("Should Match SnapShot", () => {
    expect(component).toMatchSnapshot();
  });

  it("Should render with prop name", async () => {
    const { getByText } = render(component);
    const nameText = getByText("Appointment booked Successfully!");

    expect(nameText).toBeVisible();
  });
});
