import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="page">
        <nav className="flex-container menu">
        <img src="/images/ironhack-logo.svg" />
        <img src="/images/menu-top.svg"/>
        </nav >
        <div className="flex-container">
          <div className="column white">
            <h1> Say hello to React </h1>
            <h2>You will learn a frontend framework to become a ninja web dev</h2>
            <button>Awesome!</button>
          </div>
          <div className="column menu">

          </div>
        </div>
        <div className="flex-container bottom">
          <div className="column feature">
            <img src="/images/icon1.png"/>
            <h3>Feature title</h3>
            <p>
              React text Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
          </div>
          <div className="column feature">
            <img src="/images/icon2.png"/>
            <h3>Feature title</h3>
            <p>
              React text Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
          </div>
          <div className="column feature">
            <img src="/images/icon3.png"/>
            <h3>Feature title</h3>
            <p>
              React text Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
          </div>
          <div className="column feature">
            <img src="/images/icon4.png"/>
            <h3>Feature title</h3>
            <p>
              React text Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;