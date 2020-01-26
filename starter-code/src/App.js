import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="reactApp">
        <div className="App">
        <nav>
          <img src="../images/ironhack-logo.svg" alt=""/>
        </nav>
        <h1> Say hello to ReactJS </h1>
        <p>You will learn a Frontend framework from scratch, to become a Ninja Developper</p>
      </div>
      <section id = "icons">
        <div className = "icon-container">
          <img src="../images/icon1.png" alt=""/>
          <h3>Declarative</h3>
        </div>
        <div className = "icon-container">
          <img src="../images/icon2.png" alt=""/>
          <h3>Components</h3>
        </div>
        <div className = "icon-container">
          <img src="../images/icon3.png" alt=""/>
          <h3>Single-Way</h3>
        </div>
        <div className = "icon-container">
          <img src="../images/icon4.png" alt=""/>
          <h3>JSX</h3>
        </div>
        
      </section>
      </div>  
    );
  }
}

export default App;