import { useContext } from "react";
import { PriorityListContext } from "../../../contexts/prioritylist/priorityList.context";
import PriorityListButton from "../priorityListButton/priorityListButton.component";

const PriorityAorB = () => {
  const {
    unsortedList,
    primaryIndex,
    setPrimaryIndex,
    secondaryIndex,
    setSecondaryIndex,
    setSortState,
  } = useContext(PriorityListContext);

  const arrayLoop = () => {
    if (primaryIndex < unsortedList.length - 2) {
      if (secondaryIndex < unsortedList.length - 1) {
        setSecondaryIndex(secondaryIndex + 1);
      } else {
        setSecondaryIndex(primaryIndex + 2);
        setPrimaryIndex(primaryIndex + 1);
      }
    } else {
      unsortedList.sort((a, b) => b.count - a.count);
      return true;
    }
  };

  const handleOptionSelect = (index) => {
    unsortedList[index].count++;

    if (arrayLoop()) {
      setSortState("sorted");
    }
  };
  return (
    <div className="PriorityAorB-container">
      <div className="primary-container">
        {`A: ${unsortedList[primaryIndex].item}`};
        <PriorityListButton
          btnText="A"
          onHandle={() => {
            handleOptionSelect(primaryIndex);
          }}
        />
      </div>
      <div className="secondary-container">
        {`B: ${unsortedList[secondaryIndex].item}`}
        <PriorityListButton
          btnText="B"
          onHandle={() => {
            handleOptionSelect(secondaryIndex);
          }}
        />
      </div>
    </div>
  );
};

export default PriorityAorB;
