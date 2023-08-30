import { createContext, useState } from "react";

import ListInput from "../../components/priorityList/listInput/listInput.component";
import PriorityQuestions from "../../components/priorityList/priorityQuestions/priorityQuestions.component";
import SortedList from "../../components/priorityList/sortedList/sortedList.component";

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
    handleInputChange,
  };
  return (
    <PriorityListContext.Provider value={value}>
      {children}
    </PriorityListContext.Provider>
  );
};
