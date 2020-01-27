// src/App.js

import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
            <div className="logomenu">
            <img src="/images/ironhack-logo.svg" alt="logo"/>
            <div className="menu">
            <img src="/images/menu-top.svg" alt="menu"/>
            </div>
            </div>
            <div className="Header2">
            <h1> Say hello to ReactJS</h1>
            <p> You will learn a Frontend framework from scratch, to becaome an Ninke Developer.</p>
            <button>Awesome!</button>
            </div>
        </div>
        <div className="Picto">
            <div className="Souspicto">
                <img src="/images/icon1.png" alt="icone1"/>
                <h2>Declarative</h2>
                <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div className="Souspicto">
                <img src="/images/icon2.png" alt="icone2"/>
                <h2>Components</h2>
                <p>Build encapsulated components that manage their state.</p>
            </div>
            <div className="Souspicto">
                <img src="/images/icon3.png" alt="icone3"/>
                <h2>Single-Way</h2>
                <p>A set of immutable values are passed to the component's.</p>
            </div>
            <div className="Souspicto">
                <img src="/images/icon4.png" alt="icone4"/>
                <h2>JSX</h2>
                <p>Statically-typed, designed to run on modern browsers.</p>
            </div>
        </div>
      </div>
    );
  }
}

export default App;