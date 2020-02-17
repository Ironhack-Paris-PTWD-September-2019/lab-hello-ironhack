import React, { Component } from "react";
import "./App.css";

const ironhackLogo = "./images/ironhack-logo.svg";
const topMenu = "./images/menu-top.svg";
const icon1 = "./images/icon1.png";
const icon2 = "./images/icon2.png";
const icon3 = "./images/icon3.png";
const icon4 = "./images/icon4.png";

class App extends Component {
  render() {
    return (
<div className="App">

  <div className="mainDiv">
    <div className="topDiv">
      
      <nav>
        <img src={ironhackLogo} />
        <img src={topMenu} />
      </nav>


      <header>
        <h1>Say hello to ReactJS</h1>
        <h2>
          You will learn a Frontend framework from scratch, to become an Ninka Developer.
        </h2>
        <button>Awesome!</button>
      </header>

    </div>
    <section className="flex-section">
      <div className="icons-flex">
        <img src={icon1} />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs</p>
      </div>

      <div className="icons-flex">
        <img src={icon2} />
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state.</p>
      </div>

      <div className="icons-flex">
        <img src={icon3} />
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the components.</p>
      </div>

      <div className="icons-flex">
        <img src={icon4} />
        <h3>JSX</h3>
        <p>Statically-typed designed to run on modern browsers.</p>
      </div>
    </section>
    </div>  
  </div>

  ); 


  }
}

export default App;