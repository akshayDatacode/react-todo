import React, { Component } from "react";
import { Nav, NavDropdown } from "react-bootstrap";

class TodoListBlock extends Component {
  state = {
    searchText: " ",
    TodoList: [],
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.TodoList !== this.state.TodoList) {
      this.setState({ TodoList: nextProps.TodoList });
    }
  }

  handleSearch = (searchText) => {
    this.setState({ TodoList: this.props.TodoList });
    const usersRef = [...this.state.TodoList];
    let isSearched = false;
    const task = usersRef.filter((item) => {
      if (item.todo == searchText && searchText.length > 3) {
        isSearched = true;
        return item;
      }
    });

    if (isSearched && searchText.length > 3) {
      this.setState({ TodoList: task });
    }
  };

  handleInputChangeSearchText = (event) => {
    this.setState({
      searchText: event.target.value,
    });
    this.handleSearch(this.state.searchText);
  };

  render() {
    return (
      <>
        <h1 className="mb-5">My Todo List</h1>
        <>
          <Nav variant="pills" activeKey="1">
            <Nav.Item>
              <Nav.Link eventKey="1">Todo List</Nav.Link>
            </Nav.Item>
            {this.state.TodoList.length > 1 && (
              <Nav.Item>
                <form>
                  <div className="form-group ml-5 ">
                    <br />
                    <label className="mr-2">Search</label>
                    <input
                      type="text"
                      value={this.state.searchText}
                      onChange={this.handleInputChangeSearchText}
                    />
                  </div>
                </form>
              </Nav.Item>
            )}
            {this.state.TodoList.length > 1 && (
              <NavDropdown
                title="Filter"
                id="nav-dropdown"
                className="mt-4 ml-4"
              >
                <NavDropdown.Item eventKey="4.1">
                  <button onClick={() => this.props.recentFirst()}>
                    Recent First
                  </button>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <button onClick={() => this.props.az()}>A to Z</button>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <button onClick={() => this.props.za()}>Z to A</button>
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
            {this.state.TodoList.slice(0)
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
