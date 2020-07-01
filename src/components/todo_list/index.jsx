import React, { Component } from "react";
import AddTask from "./AddTask";
import TodoListBlock from "./TodoListBlock";

class Index extends Component {
  state = {
    TodoList: [
      { taskNo: 1, todo: "Home Work" },
      { taskNo: 2, todo: "Sleep well" },
    ],
  };

  addTask = (task) => {
    console.log("data get ", task);
    const usersRef = [...this.state.TodoList];
    usersRef.push(task);
    this.setState({ TodoList: usersRef });
    console.log("State Data", this.state.TodoList);
  };

  render() {
    return (
      <>
        <div className="row mt-5">
          <div className="col-md-6">
            <h1 className="text-primary mb-5">Add Todo Task</h1>
            <AddTask addTask={this.addTask} />
          </div>
          <div className="col-md-6">
            {" "}
            <TodoListBlock TodoList={this.state.TodoList} />
          </div>
        </div>
      </>
    );
  }
}

export default Index;
