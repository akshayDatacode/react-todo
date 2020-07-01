import React, { Component } from "react";
import AddTask from "./AddTask";
import TodoListBlock from "./TodoListBlock";
import DeleteModal from "./DeleteModal";

class Index extends Component {
  state = {
    TodoList: [
      { taskNo: 1, todo: "Home Work" },
      { taskNo: 2, todo: "Sleep well" },
    ],
    show: false,
    taskNo: "",
  };

  addTask = (task) => {
    console.log("data get ", task);
    const usersRef = [...this.state.TodoList];
    usersRef.push(task);
    this.setState({ TodoList: usersRef });
    console.log("State Data", this.state.TodoList);
  };

  deleteTask = () => {
    console.log("data get ", this.state.taskNo);
    const usersRef = [...this.state.TodoList];
    const task = usersRef.filter((item) => {
      console.log(parseInt(item.taskNo), parseInt(this.state.taskNo));
      if (item.taskNo !== this.state.taskNo) {
        console.log("DDDDD", item);
        return item;
      }
    });

    this.setState({ TodoList: task, show: false });
  };

  handleDelete = (taskNo) => {
    this.setState({ show: true, taskNo: taskNo });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
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
            <TodoListBlock
              TodoList={this.state.TodoList}
              handleDelete={this.handleDelete}
            />
            <DeleteModal
              handleShow={this.handleShow}
              handleClose={this.handleClose}
              show={this.state.show}
              deleteTask={this.deleteTask}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Index;
