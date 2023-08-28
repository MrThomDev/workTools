import { useState, useContext } from "react";

import { PriorityListContext } from "../../contexts/priorityList.context";

import PriorityListButton from "../priorityListButton/priorityListButton.component";
import UnsortedListItem from "../unsortedListItem/unsortedListItem.component";
import PriorityQuestions from "../priorityQuestions/priorityQuestions.component";

const ListInput = () => {
  const {
    unsortedList,
    setUnsortedList,
    userInput,
    setUserInput,
    sortState,
    setSortState,
    handleInputChange,
    handleAddButtonClick,
  } = useContext(PriorityListContext);

  return (
    <div id="listInput-container">
      <input
        id="priority item input"
        type="text"
        value={userInput}
        placeholder="... add item"
        onChange={handleInputChange}
      />
      <div className="listInput-btn-container">
        <PriorityListButton
          id="addBtn"
          btnText="Add Item"
          onHandle={handleAddButtonClick}
        />
        <PriorityListButton
          btnText="Prioritize"
          onHandle={() => {
            setSortState("questions");
          }}
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
