import React, { Component } from "react";
import "./NameFilter.css"

export default class NameFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enteredName: ""
    };
  }

  render () {
    const nameFilterHandler = (event) => {
      this.setState({enteredName: event.target.value})
    }

    const filteredList = this.props.nameList.filter(name => name.toLowerCase().startsWith(this.state.enteredName.toLowerCase()))

    return (
      <div className="name_filter__control">
        <label>Name: </label>
        <input type="text" value={this.state.enteredName} onChange={nameFilterHandler} />
        <div className="name-list">{filteredList.map(name => <p>{name}</p>)}</div>
      </div>
    );
  }
}
