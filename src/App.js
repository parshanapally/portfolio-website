import React, { Component } from "react";
import "./App.css";
import Portfolio from "./components/Portfolio";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FirstItem from "./components/FirstItem/index";
import SecondItem from "./components/SecondItem/index";
import ThirdItem from "./components/ThirdItem/index";
import FourthItem from "./components/FourthItem/index";
import FifthItem from './components/FifthItem/index'

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Route exact path="/" component={Portfolio} />
          <Route exact path="/bridging-digital-divide" component={FirstItem} />
          <Route exact path="/rewards" component={SecondItem} />
          <Route exact path="/to-do-app" component={ThirdItem} />
          <Route exact path="/aquent" component={FourthItem} />
          <Route exact path='/synapsis' component={FifthItem}></Route>

        </main>
      </Router>
    );
  }
}

export default App;
