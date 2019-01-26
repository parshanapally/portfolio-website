import { expect } from "code";
import { shallow } from "enzyme";
import React from "react";
import Home from "../Home";

describe("Given Contact ", () => {
  const component = shallow(<Home />);

  it("should exist", () => {
    expect(component.find("div")).to.have.length(1);
  });

  it("should exist", () => {
    expect(component.find("p")).to.have.length(1);
  });
});
