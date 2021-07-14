import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import DoctorAvatar from "./DoctorAvatar";

describe("Component - DoctorAvatar", () => {
  const propMock = {
    name: "someName"
  };

  let component = <DoctorAvatar {...propMock} />;

  it("Should Match SnapShot", () => {
    expect(component).toMatchSnapshot();
  });

  it("Should render with prop name", async () => {
    const { getByText } = render(component);
    const nameText = getByText(propMock.name);

    expect(nameText).toBeVisible();
  });
});
