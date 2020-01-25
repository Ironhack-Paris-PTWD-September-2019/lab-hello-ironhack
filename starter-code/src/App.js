import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="background-color">
          <div className="header-container">
            <h1 className="say-hello"> Say Hello to ReactJS </h1>
            <h3 className="you-will">You will learn a Frontend framework from scratch, to became an Ninka Developper</h3>
            <div className="awesome">Awesome !</div>
          </div>
        </div>

        <div className="icon-container">
          <div className="unique-container">
            <img src="/images/icon1.png"></img>
            <div className="title">Declarative</div>
            <div>React make it painless to create interactive UI</div>
          </div>

          <div className="unique-container">
            <img src="/images/icon2.png"></img>
            <div className="title">Components</div>
            <div>Build encapsulated components that manage their state</div>
          </div>

          <div className="unique-container">
            <img src="/images/icon3.png"></img>
            <div className="title">Single-way</div>
            <div>A set of immutable values are passed to the component's</div>
          </div>

          <div className="unique-container">
            <img src="/images/icon4.png"></img>
            <div className="title">JSX</div>
            <div>Statically-typed designed to run on modern browsers</div>
          </div>

        </div>
    </div>
    );
  }
}

export default App;