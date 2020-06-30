import React, { Component } from "react";

class AddItems extends Component {
  state = {
    taskItem: "",
    // taskNo: "",
    taskDeadLine: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let uniqId = Math.random().toString(36).substr(2, 9);
    const todoList = {
      taskNo: "",
      task: "",
      taskDeadLine: "",
    };

    todoList.taskNo = uniqId;
    todoList.task = this.state.taskItem;
    todoList.taskDeadLine = this.state.taskDeadLine;

    this.props.addTask(todoList);
    this.formReset();
  };

  formReset = () => {
    this.setState({
      taskItem: "",
      // taskNo: "",
      taskDeadLine: "",
    });
  };

  handleInputChangeTask = (event) => {
    this.setState({
      taskItem: event.target.value,
    });
  };

  // handleInputChangeTaskNo = (event) => {
  //   this.setState({
  //     taskNo: event.target.value,
  //   });
  // };

  handleInputChangetaskDeadLine = (event) => {
    this.setState({
      taskDeadLine: event.target.value,
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <center>
            <div className="form-group">
              {/* <label for="exampleInputEmail1" className="mr-4">
                Enter Task No{" "}
              </label>
              <input
                type="text"
                value={this.state.taskNo}
                onChange={this.handleInputChangeTaskNo}
              /> */}
              <br />
              <label for="exampleInputEmail1" className="mr-4">
                Enter Your Task
              </label>
              <input
                type="text"
                value={this.state.taskItem}
                onChange={this.handleInputChangeTask}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1" className="mr-4">
                Task DeadLine
              </label>
              <input
                type="date"
                value={this.state.taskDeadLine}
                onChange={this.handleInputChangetaskDeadLine}
                className="datepicker"
                data-date-format="mm/dd/yyyy"
              />
            </div>

            <button type="submit" className="btn btn-primary text-center">
              Submit
            </button>
          </center>
        </form>
      </>
    );
  }
}

export default AddItems;
