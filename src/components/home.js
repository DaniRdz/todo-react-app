import React, { Component } from "react";

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      todos: ["Do lundry", "Do Homework", "Do lunch"],
      input: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos, this.state.input],
      input: "",
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  todoList() {
    return this.state.todos.map((todo) => {
      return <li>{todo}</li>;
    });
  }

  render() {
    return (
      <div className="home-wrapper">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="input"
            placeholder="What do yo do?"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <button type="submit">Add Todo</button>
        </form>
        <ul>{this.todoList()}</ul>
      </div>
    );
  }
}
