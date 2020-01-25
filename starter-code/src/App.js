import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="top">
          <h1> Say hello to ReactJs </h1>
          <h1> You will learn a Frontend framework from scratch, to become a Ninka Developper </h1>
          <h1 className="button"> Awesome </h1>
        </div>
        <div className="bottom">
          <img src="../public/images/icon1.png"></img>
          <img src="../public/images/icon2.png"></img>
          <img src="../public/images/icon3.png"></img>
          <img src="../public/images/icon4.png"></img>
        </div>
      </div>
    );
  }
}

export default App;
