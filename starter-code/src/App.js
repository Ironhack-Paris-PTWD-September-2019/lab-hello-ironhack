import React from "react";

class App extends React.Component{
    render() {
        return(
            <div className="App">
                <div className="nav-bar">
                    <div><img src="/images/ironhack-logo.svg" className="logo" /></div>
                    <div><img src="/images/menu-top.svg" className="menu" /></div>
                </div>

                <header>
                    <div className="hello-message">
                        <h1>Say Hello to React!</h1>
                        <p>You will learn a front end framework from scratch to become a ninja developer.</p>
                        <button>Awesome!</button>
                    </div>
                </header>

                <section>
                    <div className="thingies">
                        <img src="/images/icon1.png" className="thingies-img" />
                        <h2>Declarative</h2>
                        <p>
                            React makes it painless to create interactive UIs.
                        </p>
                    </div>

                    <div class="thingies">
                        <img src="/images/icon2.png" className="thingies-img" />
                        <h2>Components</h2>
                        <p>
                            React makes it painless to create interactive UIs.
                        </p>
                    </div>

                    <div class="thingies">
                        <img src="/images/icon3.png" className="thingies-img" />
                        <h2>Single-Way</h2>
                        <p>
                            React makes it painless to create interactive UIs.
                        </p>
                    </div>

                    <div class="thingies">
                        <img src="/images/icon4.png" className="thingies-img" />
                        <h2>JSX</h2>
                        <p>
                            React makes it painless to create interactive UIs.
                        </p>
                    </div>
                </section>

            </div>
        );
    }
}

export default App;