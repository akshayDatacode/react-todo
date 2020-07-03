import React, { Component } from "react";
import AddTask from "./AddTask";
import TodoListBlock from "./TodoListBlock";
import DeleteModal from "./DeleteModal";

class MainComponent extends Component {
  state = {
    todoList: [],
    show: false,
    taskNo: "",
  };

  addTask = (task) => {
    const todoListRef = [...this.state.todoList];
    todoListRef.push(task);
    this.setState({ todoList: todoListRef });
  };

  deleteTask = () => {
    const todoListRef = [...this.state.todoList];
    const task = todoListRef.filter((item) => {
      if (item.taskNo !== this.state.taskNo) {
        return item;
      }
    });

    this.setState({ todoList: task, show: false });
  };

  recentFirst = () => {
    const todoListRef = [...this.state.todoList];
    const recent = todoListRef.sort((a, b) =>
      a.createdAt > b.createdAt ? 1 : -1
    );
    this.setState({ todoList: recent });
  };

  ascendingFilter = () => {
    const todoListRef = [...this.state.todoList];
    const az = todoListRef.sort((a, b) => (a.todo < b.todo ? 1 : -1));
    this.setState({ todoList: az });
  };

  descendingFilter = () => {
    const todoListRef = [...this.state.todoList];
    const za = todoListRef.sort((a, b) => (a.todo > b.todo ? 1 : -1));
    this.setState({ todoList: za });
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
              todoList={this.state.todoList}
              handleDelete={this.handleDelete}
              recentFirst={this.recentFirst}
              ascendingFilter={this.ascendingFilter}
              descendingFilter={this.descendingFilter}
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

export default MainComponent;
