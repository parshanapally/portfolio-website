import React, { Component } from "react";
import "./App.css";
import Portfolio from "./components/Portfolio";
import {
  BrowserRouter as Router,
  Route,
  Link,
  history
} from "react-router-dom";
import FirstItem from "./components/FirstItem/index";
import SecondItem from "./components/SecondItem/index";
import ThirdItem from "./components/ThirdItem/index";
import FourthItem from "./components/FourthItem/index";

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Route exact path={process.env.PUBLIC_URL} component={Portfolio} />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/bridging-digital-divide"}
            component={FirstItem}
          />
          <Route exact path="/rewards" component={SecondItem} />
          <Route exact path="/to-do-app" component={ThirdItem} />
          <Route exact path="/tech-app" component={FourthItem} />
        </main>
      </Router>
    );
  }
}

export default App;
