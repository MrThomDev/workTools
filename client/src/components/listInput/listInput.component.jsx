import { useContext } from "react";

import { PriorityListContext } from "../../contexts/priorityList.context";

import PriorityListButton from "../priorityListButton/priorityListButton.component";
import UnsortedListItem from "../listItem/listItem.component";

import "./listInput.style.css";

const ListInput = () => {
  const {
    unsortedList,
    userInput,
    setSortState,
    handleInputChange,
    handleAddButtonClick,
  } = useContext(PriorityListContext);

  const handleBtnKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddButtonClick();
    }
  };

  const handlePrioritizeBtn = () => {
    if (unsortedList.length > 1) {
      setSortState("questions");
    } else {
      console.error("Add more!");
    }
  };

  return (
    <div className="listInput-container">
      <input
        className="list-input"
        id="priority item input"
        type="text"
        value={userInput}
        placeholder="Add two or more items"
        onChange={handleInputChange}
        onKeyDown={handleBtnKeyPress}
      />
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
