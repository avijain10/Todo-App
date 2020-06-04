import React from "react";
import Joke from "./Joke";
import jokesData from "./jokesData";

function App() {
  const jokeComponents = jokesData.map((joke) => (
    <Joke key={Joke.id} question={joke.question} answer={joke.answer} />
  ));

  return <div>{jokeComponents}</div>;
}
export default App;
