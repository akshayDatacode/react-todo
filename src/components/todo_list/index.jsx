import React, { Component } from "react";
import AddItems from "./AddItem";

class Index extends Component {
  state = {
    TodoList: [
      { taskNo: "1", task: "Home Work" },
      { taskNo: "2", task: "Sleep well" },
    ],
  };

  addTask = (task) => {
    console.log("data get ", task);
    const usersRef = [...this.state.TodoList];
    usersRef.push(task);
    this.setState({ TodoList: usersRef });
    console.log("State Data", this.state.TodoList);
  };

  deleteTask = (taskNo) => {
    console.log("data get ", taskNo);
    const usersRef = [...this.state.TodoList];
    const u = usersRef.filter((item) => {
      console.log(parseInt(item.taskNo), parseInt(taskNo));
      if (parseInt(item.taskNo) !== parseInt(taskNo)) {
        console.log("DDDDD", item);
        return item;
      }
    });

    this.setState({ TodoList: u });
    console.log(u);
  };

  render() {
    return (
      <>
        <div className="row mt-5">
          <div className="col-md-6">
            <h1 className="text-primary mb-5">Add Todo Task</h1>
            <AddItems addTask={this.addTask} />
          </div>
          <div className="col-md-6">
            {" "}
            <h1>My Todo List</h1>
            <>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Task ID</th>
                    <th scope="col">Dead Line</th>
                    <th scope="col">Todo Task</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                {this.state.TodoList.map((element) => (
                  <tbody>
                    <tr>
                      <th scope="row">{element.taskNo}</th>
                      <td>{element.taskDeadLine}</td>
                      <td>{element.task}</td>
                      <td>
                        <button
                          onClick={() => this.deleteTask(element.taskNo)}
                          className="btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </>
          </div>
        </div>
      </>
    );
  }
}

export default Index;
