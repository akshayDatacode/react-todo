import React, { Component } from "react";
import { Nav, NavDropdown } from "react-bootstrap";

class TodoListBlock extends Component {
  state = {
    searchText: "",
    todoList: [],
    searchActive: false,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.todoList !== this.state.todoList) {
      this.setState({ todoList: nextProps.todoList });
    }
  }

  handleSearch = () => {
    this.setState({ todoList: this.props.todoList });
    const todoListRef = [...this.state.todoList];
    let isSearched = false;
    const task = todoListRef.filter((item) => {
      if (
        item.todo.includes(this.state.searchText) &&
        this.state.searchText.length > 2
      ) {
        isSearched = true;
        return item;
      }
    });

    if (isSearched && this.state.searchText.length > 2) {
      this.setState({ todoList: task });
    }
  };

  handleInputChangeSearchText = (event) => {
    event.preventDefault();
    this.setState({
      searchText: event.target.value,
      searchActive: true,
    });
    this.handleSearch();
  };

  render() {
    return (
      <>
        <h1 className="mb-5">My Todo List</h1>
        <>
          <Nav variant="pills" activeKey="1">
            <div>
              <div className="badge badge-primary">
                <h5 className="p-1">Todo List</h5>
              </div>
            </div>
            {this.state.todoList.length > 1 && (
              <Nav.Item>
                <form>
                  <div className="form-group ml-5 ">
                    <br />
                    <label className="mr-2">Search</label>
                    <input
                      type="text"
                      value={this.state.searchText}
                      onChange={(event) => {
                        this.handleInputChangeSearchText(event);
                      }}
                    />
                  </div>
                </form>
              </Nav.Item>
            )}
            {this.state.todoList.length > 1 && (
              <NavDropdown
                title="Filter"
                id="nav-dropdown"
                className="mt-4 ml-4"
              >
                <NavDropdown.Item onClick={() => this.props.recentFirst()}>
                  Recent First
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.ascendingFilter()}>
                  A to Z
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.descendingFilter()}>
                  Z to A
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            )}
          </Nav>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Todo Task</th>
                <th scope="col"></th>
              </tr>
            </thead>
            {this.state.todoList
              .slice(0)
              .reverse()
              .map((element) => (
                <tbody>
                  <tr>
                    <td>{element.todo}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => this.props.handleDelete(element.taskNo)}
                      >
                        Delete
                      </button>
                    </td>
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
