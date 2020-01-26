import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
          <nav className="Menu">
            <img src="/images/ironhack-logo.svg" alt="logo"/>
            <img src="/images/menu-top.svg" alt="picto menu"/>
          </nav>
          <h1>Say hello to<br/>ReactJs</h1>
          <p>
            You will learn a Frontend<br/>
            framework from scratch, to<br/>
            become an Ninka Developer.<br/>
          </p>
          <a href="#"><b>Awesome!</b></a>
        </div>
        <div className="Section">
          <div>
            <img src="/images/icon1.png" alt="icon declarative"/>
            <h2>Declarative</h2>
            <p>
              React makes import<br/>
              painless to create<br/>
              interactive UIs.<br/>
            </p>
          </div>
          <div>
            <img src="/images/icon2.png" alt="icon components"/>
            <h2>Components</h2>
            <p>
              Build encapsulated<br/>
              components that<br/>
              manage their state.<br/>
            </p>
          </div>
          <div>
            <img src="/images/icon3.png" alt="icon single way"/>
            <h2>Single-Way</h2>
            <p>
              A set of immutable<br/>
              values are passed to<br/>
              the component's.<br/>
            </p>
          </div>
          <div>
            <img src="/images/icon4.png" alt="icon jsx"/>
            <h2>JSX</h2>
            <p>
              Statically-typed,<br/>
              designed to run on<br/>
              modern browsers.<br/>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;