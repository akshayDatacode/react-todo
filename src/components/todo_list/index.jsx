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
    searchText: "",
  };

  addTask = (task) => {
    console.log("data get ", task);
    const usersRef = [...this.state.TodoList];
    console.log("data get 222 ", usersRef);
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

  recentFirst = () => {
    const usersRef = [...this.state.TodoList];
    const recent = usersRef.sort((a, b) =>
      a.createdAt > b.createdAt ? 1 : -1
    );
    this.setState({ TodoList: recent });
  };

  az = () => {
    const usersRef = [...this.state.TodoList];
    const az = usersRef.sort((a, b) => (a.todo < b.todo ? 1 : -1));
    this.setState({ TodoList: az });
  };

  za = () => {
    const usersRef = [...this.state.TodoList];
    const za = usersRef.sort((a, b) => (a.todo > b.todo ? 1 : -1));
    this.setState({ TodoList: za });
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
              TodoListSearched={this.state.TodoListSearched}
              handleDelete={this.handleDelete}
              recentFirst={this.recentFirst}
              az={this.az}
              AZ={this.state.az}
              za={this.za}
              ZA={this.state.za}
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
