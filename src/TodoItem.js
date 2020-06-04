import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" />
      <p>{props.todoitem.text}</p>
    </div>
  );
}

export default TodoItem;
