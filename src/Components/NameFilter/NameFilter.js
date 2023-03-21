import React from "react";

export default function NameFilter(props) {
  const [enteredName, setEnteredName] = React.useState("")

  const nameFilterHandler = (event) => {
    setEnteredName(event.target.value)
    props.nameList.filter('')
  }

  return (
    <div className="name_filter__control">
      <label>Name</label>
      <input type="text" value={enteredName} onChange={nameFilterHandler} />
    </div>
  );
}
