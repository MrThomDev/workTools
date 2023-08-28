import { useContext, useEffect } from "react";
import { PriorityListContext } from "../../contexts/priorityList.context";

const PriorityList = () => {
  const { sortObject, sortState } = useContext(PriorityListContext);

  return (
    <div id="PriorityList-container">
      <h1>Priority List</h1>
      {sortObject[sortState]}
    </div>
  );
};

export default PriorityList;
