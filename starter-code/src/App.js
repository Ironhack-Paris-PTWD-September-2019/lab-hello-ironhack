import React, { Component } from "react";
import "./App.css";

class App extends Component {
    render() {
      return (
        <div className="App">
          <div className="first-part">
            <div className="nav-bar">
              <img src="/images/ironhack-logo.svg"></img>
              <img className="menu-top" src="/images/menu-top.svg"></img>
            </div>
            <div className="message">
              <h1> Say hello to ReactJS </h1>
              <h2> You will learn a Frontend framework from scratch, to become a Ninka Developper</h2>
            </div>
            <div className="awesome">
              <h1> Awesome!</h1>
            </div>
          </div>
          <div className="utilities">
            <div className="utilities-part">
              <img src="/images/icon1.png"></img>
              <h1>Declarative</h1>
              <p>React makes it painless to create interactive UIs</p>
            </div>
            <div className="utilities-part">
              <img src="/images/icon2.png"></img>
              <h1>Components</h1>
              <p>Build encapsulated components that manage their state</p>
            </div>
            <div className="utilities-part">
              <img src="/images/icon3.png"></img>
              <h1>Single-way</h1>
              <p>A set of immutable values are passed to the component's</p>
            </div>
            <div className="utilities-part">
              <img src="/images/icon4.png"></img>
              <h1>JSX</h1>
              <p>Statiscally-typed designed to run on modern browsers</p>
            </div>
          </div>

        </div>
      );
    }
  }

export default App; 