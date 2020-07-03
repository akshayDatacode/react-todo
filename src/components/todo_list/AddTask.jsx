import React, { Component } from "react";

class AddTask extends Component {
  state = {
    todo: "",
    isEmpty: true,
    showError: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const uniqId = Math.random().toString(36).substr(2, 9);

    const todoList = {
      taskNo: uniqId,
      todo: this.state.todo,
      createdAt: new Date(),
    };

    // Code for cheking isEmpty
    if (todoList.todo != "") {
      this.setState({
        isEmpty: false,
        showError: false,
      });
      this.props.addTask(todoList);
      this.formReset();
    } else {
      this.setState({
        isEmpty: true,
        showError: true,
      });
    }
  };

  formReset = () => {
    this.setState({
      todo: "",
      taskDeadLine: "",
      isEmpty: true,
      showError: false,
    });
  };

  handleInputChangeTodo = (event) => {
    event.preventDefault();
    this.setState({
      todo: event.target.value,
    });
  };

  render() {
    return (
      <>
        <form>
          <center>
            <div className="form-group">
              <br />
              <label for="exampleInputEmail1" className="mr-4">
                Enter Your Task
              </label>
              <input
                type="text"
                value={this.state.todo}
                onChange={(event) => {
                  this.handleInputChangeTodo(event);
                }}
              />
              {this.state.showError && (
                <h6 className="text-danger">Please Insert Todo Task</h6>
              )}
            </div>
            <button
              className="btn btn-success text-center"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
            <button
              type="reset"
              className="btn btn-primary ml-5"
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
