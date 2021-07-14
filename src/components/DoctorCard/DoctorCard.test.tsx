import { fireEvent, render } from "@testing-library/react";
import DoctorCard from "./DoctorCard";

describe("Component - DoctorCard", () => {
  const propMock = {
    id: "someId",
    name: "Henrique Omena",
    address: {
      city: "Funchal",
      country: "Portugal",
      line1: "Santa",
      line2: "Rita",
      postalCode: "0099"
    }
  };

  let component = <DoctorCard {...propMock} />;

  it("Should Match SnapShot", () => {
    expect(component).toMatchSnapshot();
  });

  it("Should render with prop name", async () => {
    const { getByText } = render(component);
    const nameText = getByText(propMock.name);

    expect(nameText).toBeVisible();
  });

  it("Should Click on Availabilities Button", async () => {
    const { getByText } = render(component);
    const button = getByText("Availabilities");
    fireEvent.click(button);
  });
});
