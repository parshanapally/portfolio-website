import { expect } from "code";
import { shallow } from "enzyme";
import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

describe("Given App ", () => {
  it("should redirect to Home", () => {
    const component = shallow(
      <Router>
        <Route initialEntries={["/"]}>
          <Home />
        </Route>
      </Router>
    );
    expect(component.find(Home)).to.have.length(1);
  });

  it("should redirect to Contact", () => {
    const component = shallow(
      <Router>
        <Route initialEntries={["/contact"]}>
          <Contact />
        </Route>
      </Router>
    );
    expect(component.find(Contact)).to.have.length(1);
  });
  it("should redirect to Portfolio", () => {
    const component = shallow(
      <Router>
        <Route initialEntries={["/portfolio"]}>
          <Portfolio />
        </Route>
      </Router>
    );
    expect(component.find(Portfolio)).to.have.length(1);
  });
});
