import { expect } from "code";
import { shallow } from "enzyme";
import React from "react";
import Contact from "../Contact";

describe("Given Contact ", () => {
  const component = shallow(<Contact />);

  it("should exist", () => {
    expect(component.find("div.container-fluid")).to.have.length(1);
  });
  it("should exist", () => {
    expect(component.find("div.row")).to.have.length(1);
  });
  it("should exist", () => {
    expect(component.find("div.personal-info")).to.have.length(1);
  });
  it("should exist", () => {
    const paragraph = component.find("p.social-media");
    expect(paragraph.find("a")).to.have.length(3);
  });
});
