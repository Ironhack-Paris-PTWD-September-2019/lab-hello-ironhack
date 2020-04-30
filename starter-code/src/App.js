import React, { Component } from "react";
import "../public/stylesheets/App.css";


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="bluePart">
          <nav className="navbar">
              <div id="logoIronhack"><img src="/images/ironhack-logo.svg" alt="logo-ironhack"/></div>
              <div id="menu-top"><img src="/images/menu-top.svg" alt="menu-top-right"/></div>
          </nav>

          <div className="milieu">
            <h1>Say Hello to ReactJS</h1>
            <p>You will learn a frontend framework from scratch, to become a Ninja Developper</p>
            <button id="awesome">Awesome!</button>
          </div>
        </div>

        <div className="iconsBox">
          <div className="icon">
            <img src="/images/icon1.png" alt="icon1"/>
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs</p>
          </div>

          <div className="icon">
            <img src="/images/icon2.png" alt="icon1"/>
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state.</p>
          </div>
          
          <div className="icon">
            <img src="/images/icon3.png" alt="icon1"/>
            <h2>Single Way</h2>
            <p>Build encapsulated components that manage their state.</p>
          </div>

          <div className="icon">
            <img src="/images/icon4.png" alt="icon1"/>
            <h2>JSX</h2>
            <p>Build encapsulated components that manage their state.</p>
          </div>
        </div>

      </div>
    );
  }
}

export default App;