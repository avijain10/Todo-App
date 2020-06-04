import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";

function App() {
  const todoItems = todosData.map((todoitem) => (
    <TodoItem key={todoitem.id} todoitem={todoitem} />
  ));

  return <div className="todo-list">{todoItems}</div>;
}
export default App;
