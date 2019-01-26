import { expect } from "code";
import { shallow } from "enzyme";
import React from "react";
import App from "./App";

describe("Given App ", () => {
  const component = shallow(<App />);
  it("should exist", () => {
    expect(component.find("div")).to.have.length(1);
  });

  it("should contain Home component", () => {
    let Home = component.find("Home");
    expect(Home).to.have.length(1);
  });
  it("should contain Home component", () => {
    let Portfolio = component.find("Portfolio");
    expect(Portfolio).to.have.length(1);
  });
  it("should contain Home component", () => {
    let Contact = component.find("Contact");
    expect(Contact).to.have.length(1);
  });
});
