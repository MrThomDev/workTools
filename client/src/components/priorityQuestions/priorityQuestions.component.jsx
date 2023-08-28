import { useState, useContext } from "react";
import PriorityListButton from "../priorityListButton/priorityListButton.component";

import { PriorityListContext } from "../../contexts/priorityList.context";
import PriorityAorB from "../priorityAorB/priorityAorB.component";

const PriorityQuestions = () => {
  const {
    primaryIndex,
    setprimaryIndex,
    secondaryIndex,
    setsecondaryIndex,
    sortObject,
    unsortedList,
  } = useContext(PriorityListContext);

  return (
    <div className="priorityQuestions-container">
      <div className="questionPrompt">
        Which has the higher priority? Option A or Option B?
      </div>
      <div className="selection-container">
        <PriorityAorB />
      </div>
    </div>
  );
};

export default PriorityQuestions;

{
  /* <div className="option-a">
        {`Option A\n${primaryIndex}`}
        <PriorityListButton
          onHandle={() => {
            handleOptionSelectButton(primaryIndex);
          }}
        >
          Option A
        </PriorityListButton>
      </div>
      <div className="option-b">
        {`Option B\n${secondaryIndex}`}
        <PriorityListButton
          onHandle={() => {
            handleOptionSelectButton(secondaryIndex);
          }}
        >Option B</PriorityListButton>
      </div> */
}
