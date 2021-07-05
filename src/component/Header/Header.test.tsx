import { shallow } from "enzyme";
import Header from "./index";
import Logo from "../../assets/joovence-logo.png";
import {Link} from "react-router-dom"

/**
 * function shallow for App component
 * @returns {shalloWrapper}
 */

const setup = (): any => {
  return shallow(<Header />);
};

describe("display logo without error", () => {
  it("renders logo", () => {
    const wrapper = setup();
    const header = wrapper.find(`[data-test='header-logo']`);
    console.log(header);
    expect(header.length).toBe(1);
  });

  it("render image Header", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toBeTruthy();
    expect(wrapper.find("img").prop("src")).toEqual(Logo);
  });
});
