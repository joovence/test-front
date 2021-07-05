import * as React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Header from "./component/Header/index";
import DoctorList from "./component/DoctorList/index";

test("renders the heading", () => {
  const result = shallow(<App />).contains(
    <>
      <Header />
      <DoctorList />
    </>
  );
  expect(result).toBeTruthy();
});
