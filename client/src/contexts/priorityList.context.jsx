import { createContext, useState, useEffect } from "react";

import ListInput from "../components/listInput/listInput.component";
import PriorityQuestions from "../components/priorityQuestions/priorityQuestions.component";
import UnsortedListItem from "../components/unsortedListItem/unsortedListItem.component";
import SortedList from "../components/sortedList/sortedList.component";

export const PriorityListContext = createContext({
  sortState: "",
  setSortState: () => {},
  userInput: "",
  unsortedList: [],
  sortedList: [],
  primaryIndex: 0,
  secondaryIndex: 1,
  sortObject: {},
  handleInputChange: () => {},
  handleAddButtonClick: () => {},
});

export const PriorityListProvier = ({ children }) => {
  const [sortState, setSortState] = useState("input");
  const [userInput, setUserInput] = useState("");
  const [unsortedList, setUnsortedList] = useState([]);
  const [sortedList, setSortedList] = useState([]);
  const [primaryIndex, setPrimaryIndex] = useState(0);
  const [secondaryIndex, setSecondaryIndex] = useState(1);
  const sortObject = {
    input: <ListInput />,
    questions: <PriorityQuestions />,
    sorted: <SortedList />,
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleAddButtonClick = () => {
    if (userInput.length > 0) {
      setUnsortedList([...unsortedList, { item: userInput, count: 0 }]);
      setUserInput("");
    }
    return;
  };

  const value = {
    sortState,
    setSortState,
    userInput,
    setUserInput,
    unsortedList,
    setUnsortedList,
    sortedList,
    setSortedList,
    primaryIndex,
    setPrimaryIndex,
    secondaryIndex,
    setSecondaryIndex,
    sortObject,
    handleInputChange: handleInputChange,
    handleAddButtonClick,
  };
  return (
    <PriorityListContext.Provider value={value}>
      {children}
    </PriorityListContext.Provider>
  );
};
