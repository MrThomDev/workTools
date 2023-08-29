import { useContext } from "react";
import { PriorityListContext } from "../../contexts/priorityList.context";

import "./priorityList.style.css";

const PriorityList = () => {
  const { sortObject, sortState } = useContext(PriorityListContext);

  return (
    <div id="PriorityList-container">
      <h1 className="priority-header">Priority List</h1>
      {sortObject[sortState]}
    </div>
  );
};

export default PriorityList;
