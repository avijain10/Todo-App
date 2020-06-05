import React from "react";
import ReactDOM from "react-dom";

function Conditional(props) {
  if (props.isLoading === true) {
    return <h1>Loading...</h1>;
  } else {
    return <h1>Successful</h1>;
  }
}

export default Conditional;
