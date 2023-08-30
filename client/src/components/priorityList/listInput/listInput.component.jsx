import { useContext, useState } from "react";

import { PriorityListContext } from "../../../contexts/prioritylist/priorityList.context";

import PriorityListButton from "../priorityListButton/priorityListButton.component";
import UnsortedListItem from "../listItem/listItem.component";

import "./listInput.style.css";

const ListInput = () => {
  const [inputTitle, setInputTitle] = useState("");

  const {
    unsortedList,
    setUnsortedList,
    userInput,
    setUserInput,
    setSortState,
    handleInputChange,
  } = useContext(PriorityListContext);

  const handleBtnKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddButtonClick();
    }
  };

  const handleAddButtonClick = () => {
    if (userInput.length > 0) {
      setUnsortedList([...unsortedList, { item: userInput, count: 0 }]);
      setUserInput("");
    }
    return;
  };

  const handlePrioritizeBtn = () => {
    if (unsortedList.length > 1) {
      setSortState("questions");
    } else {
      setInputTitle("Add at least 2 items");
    }
  };

  return (
    <div className="listInput-container">
      <label htmlFor="priority-item-input" className="lable">
        <span className="lable-title">{`${inputTitle}`}</span>
        <input
          className="list-input"
          id="priority-item-input"
          type="text"
          value={userInput}
          placeholder="Add items..."
          onChange={handleInputChange}
          onKeyDown={handleBtnKeyPress}
        />
      </label>
      <div className="listInput-btn-container">
        <PriorityListButton
          btnText="Add Item"
          onHandle={handleAddButtonClick}
        />
        <PriorityListButton
          btnText="Prioritize"
          onHandle={handlePrioritizeBtn}
        />
      </div>
      <div className="unsortedList-container">
        {unsortedList.map((item, index) => (
          <UnsortedListItem key={index} index={index} item={item.item} />
        ))}
      </div>
    </div>
  );
};

export default ListInput;
