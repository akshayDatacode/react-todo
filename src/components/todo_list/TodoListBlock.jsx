import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

class TodoListBlock extends Component {
  state = {};
  render() {
    return (
      <>
        <h1 className="mb-5">My Todo List</h1>
        <>
          <Nav variant="pills" activeKey="1">
            <Nav.Item>
              <Nav.Link eventKey="1">Todo List</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="3" disabled className=" ml-3 mr-5">
                Search :{" "}
                <input
                  type="text"
                  value={this.state.todo}
                  onChange={this.handleInputChangeTodo}
                />
              </Nav.Link>
            </Nav.Item>
            <NavDropdown title="Filter" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">
                <button onClick={() => this.props.recentFirst()}>
                  Recent First
                </button>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">
                <button onClick={() => this.props.az()}>A to Z</button>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">
                <button onClick={() => this.props.za()}>Z to A</button>
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Todo Task</th>
                <th scope="col"></th>
              </tr>
            </thead>
            {this.props.TodoList.slice(0)
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
