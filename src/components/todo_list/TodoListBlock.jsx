import React, { Component } from "react";
class TodoListBlock extends Component {
  state = {};
  render() {
    return (
      <>
        <h1>Todo List Block</h1>

        <h1>My Todo List</h1>
        <>
          <table class="table">
            <thead>
              <tr>
                <th scope="col"> Todo List :</th>
                <th scope="col">
                  {" "}
                  Search :<input type="text" />{" "}
                </th>
                <th scope="col"></th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th scope="col">Todo Task</th>
              </tr>
            </thead>
            {this.props.TodoList.map((element) => (
              <tbody>
                <tr>
                  <td>{element.todo}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </>
      </>
    );
  }
}

export default TodoListBlock;
