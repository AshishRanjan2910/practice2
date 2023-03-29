import React, { Component } from "react";
import "./TodoList.css"

class TodoList extends Component {
  render() {
    const { items, onItemClick } = this.props;
    function handleClick(item, event) {
      if (!item.done) {
        onItemClick(item, event);
      }
      else{
        event.stopPropagation();
      }
    }

    return (
      <ul>
        <h1>Todo List</h1>
        {items.map((item, index) => (
          <li
            key={index}
            onClick={(event) => handleClick(item, event)}
            className={item.done ? "done" : ""}
          >
            {item.text}
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
