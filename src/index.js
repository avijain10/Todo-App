import React, { Component } from "react";
import ReactDOM from "react-dom";
// import App from "./App";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header username="Avi" />
        <Greeting />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <p>Welcome, {this.props.username}</p>
      </header>
    );
  }
}

class Greeting extends Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeofday;

    if (hours < 12) {
      timeofday = "morning";
    } else if (hours >= 12 && hours < 17) {
      timeofday = "afternoon";
    } else {
      timeofday = "night";
    }

    return <h1>Good {timeofday}</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
