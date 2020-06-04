import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.todoitem.completed}
        onChange={() => console.log("Changed!")}
      />
      <p>{props.todoitem.text}</p>
    </div>
  );
}

export default TodoItem;
