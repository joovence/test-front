import { render } from "@testing-library/react";
import AddressDetails from "./AddressDetails";

describe("Component - AddressDetails", () => {
  const propMock = {
    city: "Funchal",
    country: "Portugal",
    line1: "Santa",
    line2: "Rita",
    postalCode: "0099"
  };

  let component = <AddressDetails {...propMock} />;

  it("Should Match SnapShot", () => {
    expect(component).toMatchSnapshot();
  });

  it("Should render each prop", async () => {
    const { getByText } = render(component);
    const { city, country, line1, line2, postalCode } = propMock;
    const cityCountryText = getByText(city + ", " + country);
    const line1Text = getByText(line1);
    const line2Text = getByText(line2);
    const postalCodeText = getByText(postalCode);

    expect(cityCountryText).toBeVisible();
    expect(line1Text).toBeVisible();
    expect(line2Text).toBeVisible();
    expect(postalCodeText).toBeVisible();
  });
});
