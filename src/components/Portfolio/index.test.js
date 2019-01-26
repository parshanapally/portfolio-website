import { expect } from "code";
import { shallow } from "enzyme";
import React from "react";
import Portfolio from "../Portfolio";

describe("Given Contact ", () => {
  const component = shallow(<Portfolio />);

  it("should exist", () => {
    expect(component.find("div")).to.have.length(1);
  });
});
