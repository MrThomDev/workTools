import { useState } from "react";

import PriorityListButton from "../priorityListButton/priorityListButton.component";
import UnsortedListItem from "../unsortedListItem/unsortedListItem.component";

const ListInput = () => {
  const [unsortedList, setUnsortedList] = useState([]);
  const [userInput, setUserInput] = useState("");

  const test2 = () => {
    console.log("Hooray!");
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleAddButtonClick = () => {
    if (userInput.length > 0) {
      setUnsortedList([...unsortedList, userInput]);
      setUserInput("");
    }
    return;
  };
  return (
    <div id="listInput-container">
      <h2>Priority List</h2>
      <input
        type="text"
        value={userInput}
        placeholder="... add item"
        onChange={handleInputChange}
      />
      <div className="listInput-btn-container">
        <PriorityListButton
          id="addBtn"
          btnText="Add Item"
          onClick={handleAddButtonClick}
        />
        <PriorityListButton btnText="Prioritize" onClick={test2} />
      </div>
      <div className="unsortedList-container">
        {unsortedList.map((item, index) => (
          <UnsortedListItem index={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ListInput;
