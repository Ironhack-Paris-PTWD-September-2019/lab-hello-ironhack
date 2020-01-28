import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="bluecard">
          <div className="navbar">
            <img src="/images/ironhack-logo.svg"></img>
            <img src="/images/menu-top.svg"></img>
          </div>
          <div className="intro">
            <h1>Say hello to ReactJS</h1>
            <h2>You will learn a Frontend framework from scratch, to become an Ninja Developer</h2>
            <div className="button"><h2>Awesome!</h2></div>
            </div>
        </div>
        <div className="descImages">
          <div>
            <img src="/images/icon1.png"></img>
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIS</p>
          </div>
          <div>
            <img src="/images/icon2.png"></img>
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state.</p>
          </div>
          <div>
            <img src="/images/icon3.png"></img>
            <h2>Single-Way</h2>
            <p>A set of immutable values are passed to the component's.</p>
          </div>
          <div>
            <img src="/images/icon4.png"></img>
            <h2>JSX</h2>
            <p>Statically-typed, designed to run on model browsers.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;