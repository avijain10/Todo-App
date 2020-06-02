import React from "react";
import ReactDOM from "react-dom";

function App() {
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

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
