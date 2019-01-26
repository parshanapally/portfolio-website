import React, { Component } from "react";

import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default App;
