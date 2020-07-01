import React, { Component } from "react";

class AddTask extends Component {
  state = {
    todo: "",
    // taskNo: "",
    createdAt: {},
    isEmpty: true,
    showError: false,
  };

  handleSubmit = (event) => {
    console.log("handle submit ON");
    event.preventDefault();
    let uniqId = Math.random().toString(36).substr(2, 9);
    let date = new Date();

    const todoList = {
      taskNo: "",
      todo: "",
      createdAt: {},
    };

    todoList.taskNo = uniqId;
    todoList.todo = this.state.todo;
    todoList.createdAt = date;

    console.log("handle wala TODO LIST", todoList);

    // Code for cheking isEmpty
    if (todoList.todo != "") {
      this.setState({
        isEmpty: false,
        showError: false,
      });
    } else {
      this.setState({
        isEmpty: true,
        showError: true,
      });
      console.log("Khali he ");
    }

    if (!this.state.isEmpty) {
      this.props.addTask(todoList);
      this.formReset();
    }
  };

  formReset = () => {
    this.setState({
      todo: "",
      // taskNo: "",
      taskDeadLine: "",
      isEmpty: true,
      showError: false,
    });
  };

  handleInputChangeTodo = (event) => {
    this.setState({
      todo: event.target.value,
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <center>
            <div className="form-group">
              <br />
              <label for="exampleInputEmail1" className="mr-4">
                Enter Your Task
              </label>
              <input
                type="text"
                value={this.state.todo}
                onChange={this.handleInputChangeTodo}
              />
              {this.state.showError && (
                <h6 className="text-danger">Please Insert Todo Task</h6>
              )}
            </div>
            <button type="submit" className="btn btn-primary text-center">
              Submit
            </button>
            <button
              type="reset"
              className="btn btn-default btn-danger ml-5"
              onClick={this.formReset}
            >
              Reset
            </button>
          </center>
        </form>
      </>
    );
  }
}

export default AddTask;
