import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos,
      };
    });
  }
  render() {
    const todoItems = this.state.todos.map((todoitem) => (
      <TodoItem
        key={todoitem.id}
        todoitem={todoitem}
        handleChange={this.handleChange}
      />
    ));

    return <div className="todo-list">{todoItems}</div>;
  }
}

//function handleClick() {
// console.log("i was clicked");
//}

//function App() {
//return (
//<div>
//<img
//onMouseOver={() => console.log("hovered")}
//       src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUAg3lthAasVBgIMJ5g-MbW-vSGsGH6Q0Q19h_9SPhDXPtZAYS&usqp=CAU"
//   />
// <br />
//    <br />
//  <button onClick={handleClick}>Click Me</button>
//   </div>
// );
//}

//class App extends React.Component {
//constructor() {
//super();
//   this.state = {
//   count: 0,
//  };
//this.handleClick = this.handleClick.bind(this);
//   this.handleReset = this.handleReset.bind(this);
//}

//  handleClick() {
//  this.setState((prevState) => {
//  return {
//  count: prevState.count + 1,
//  };
// });
//}

// handleReset() {
// this.setState((prevState) => {
// return {
// count: (prevState.count = 0),
//    };
//});
//}

//render() {
//return (
//<div>
//<h1>{this.state.count}</h1>
//       <button onClick={this.handleClick}>Change</button>
//     <button onClick={this.handleReset}>Reset</button>
// </div>
// );
// }
//}
export default App;

//lifecycle methods part-1 :

//componentWillMount() *deprecated*
//componentWillUnmount()
//componentWillReceiveProps(nextProps)  *deprecated*
//shouldComponentUpdate(nextProps, nextState)
//componentDidMount()

//lifecycle methods part-2 :

//componentWillUpdate()  *deprecated*
//static getDerivedStateFromProps(props,state)
//getSnapshotBeforeUpdate()
