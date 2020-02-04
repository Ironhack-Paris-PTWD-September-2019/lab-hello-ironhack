import React from 'react';

import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <a className="logo" href="/">
            <img src="/images/ironhack-logo.svg" alt/>
          </a>

          <a className="burger" href="javascript:void 0;">
            <img src="/images/menu-top.svg" alt/>
          </a>
          
          <h1>Say hello to <span>ReactJS</span></h1>
          <p>You will learn a Frontend framework from scratch, to become an Ninka Developer.</p>

          <p>
            <a href="javascript:void 0;" className="btn">Awesome</a>
          </p>
        </header>

        <ul class="features">
          <li>
            <img src="/images/icon1.png" alt />
            <strong>Declarative</strong>
            <p>React makes it painless to create interactive UIs.</p>
          </li>
          <li>
            <img src="/images/icon2.png" alt />
            <strong>Components</strong>
            <p>Build encapsulated components that manage their state.</p>
          </li>
          <li>
            <img src="/images/icon3.png" alt />
            <strong>Single-Way</strong>
            <p>A set of immutable values are passed to the components.</p>
          </li>
          <li>
            <img src="/images/icon4.png" alt />
            <strong>JSX</strong>
            <p>Statically typed, designed to run on modern browsers.</p>
          </li>
        </ul>
      </div>
    )
  }
}

export default App;