import { expect } from "code";
import { shallow } from "enzyme";
import React from "react";
import Contact from "../Contact";

describe("Given Contact ", () => {
  const component = shallow(<Contact />);

  it("should contain div with classname of container-fluid ", () => {
    expect(component.find("div.container-fluid")).to.have.length(1);
  });
  it("should contain div with classname of row", () => {
    expect(component.find("div.row")).to.have.length(1);
  });
  it("should contain div with classname of personal-info", () => {
    expect(component.find("div.personal-info")).to.have.length(1);
  });
  it("should contain a", () => {
    const paragraph = component.find("p.social-media");
    expect(paragraph.find("a")).to.have.length(3);
  });

  it("should contain img", () => {
    const paragraph = component.find("p.social-media");
    expect(paragraph.find("img")).to.have.length(3);
  });
});
