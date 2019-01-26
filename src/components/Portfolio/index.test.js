import { expect } from "code";
import { shallow } from "enzyme";
import React from "react";
import Portfolio from "../Portfolio";

describe("Given Contact ", () => {
  const component = shallow(<Portfolio />);

  it("should contain div with classname of container-portfolio ", () => {
    expect(component.find("div.container-portfolio")).to.have.length(1);
  });

  it("should contain div with classname of container-fluid ", () => {
    expect(component.find("div.container-fluid")).to.have.length(1);
  });
  it("should contain div with classname of container-box ", () => {
    expect(component.find("div.container-box")).to.have.length(3);
  });

  it("should contain a", () => {
    expect(component.find("a")).to.have.length(1);
  });

  it("should contain img", () => {
    expect(component.find("img")).to.have.length(1);
  });
});
