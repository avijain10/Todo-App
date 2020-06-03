import React from "react";
import Joke from "./Joke";

function App() {
  return (
    <div>
      <Joke
        question="What is the first lang used for frontend?"
        answer="HTML"
      />
      <Joke
        question="What is the second lang used for frontend?"
        answer="CSS"
      />
      <Joke
        question="What is the third lang used for frontend?"
        answer="Javascript"
      />
      <Joke
        question="What is the fourth lang used for frontend?"
        answer="ES6"
      />
      <Joke
        question="What is the fifth lang used for frontend?"
        answer="React"
      />
    </div>
  );
}
export default App;
