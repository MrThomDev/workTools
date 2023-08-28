import { useContext } from "react";
import { PriorityListContext } from "../../contexts/priorityList.context";

import UnsortedListItem from "../unsortedListItem/unsortedListItem.component";
import PriorityListButton from "../priorityListButton/priorityListButton.component";

const SortedList = () => {
  const {
    unsortedList,
    setUnsortedList,
    setPrimaryIndex,
    setSecondaryIndex,
    setSortState,
  } = useContext(PriorityListContext);

  const resetList = () => {
    setUnsortedList([]);
    setPrimaryIndex(0);
    setSecondaryIndex(1);
    setSortState("input");
  };

  return (
    <div className="sortedList-result-container">
      <div className="sortedList">
        {unsortedList.map((item, index) => {
          return (
            <UnsortedListItem key={index} item={item.item} index={index} />
          );
        })}
      </div>
      <PriorityListButton btnText={"New List"} onHandle={resetList} />
    </div>
  );
};

export default SortedList;
