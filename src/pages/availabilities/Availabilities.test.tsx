import { render } from "@testing-library/react";
import React from "react";
import Availabilities from "./Availabilities";

describe("Component - Availabilities", () => {
  let component = <Availabilities />;

  it("Should Match SnapShot", () => {
    expect(component).toMatchSnapshot();
  });

  it("Should render with prop name", async () => {
    const { getByText } = render(component);
    const nameText = getByText("Bookings");

    expect(nameText).toBeVisible();
  });
});
