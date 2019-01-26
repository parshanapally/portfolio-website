import { expect } from "code";
import { shallow } from "enzyme";
import React from "react";
import Home from "../Home";

describe("Given Contact ", () => {
  const component = shallow(<Home />);

  it("should contain div with classname container", () => {
    expect(component.find("div.container")).to.have.length(2);
  });

  it("should contain div with id header", () => {
    expect(component.find("div#header")).to.have.length(1);
  });
  it("should contain div with id description", () => {
    expect(component.find("div#description")).to.have.length(1);
  });
  it("should contain h1", () => {
    expect(component.find("h1")).to.have.length(1);
  });
  it("should contain h2", () => {
    expect(component.find("h2")).to.have.length(1);
  });
  it("should exist", () => {
    expect(component.find("p")).to.have.length(1);
  });
});
