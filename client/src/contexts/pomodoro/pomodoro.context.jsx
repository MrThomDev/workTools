import { createContext, useState } from "react";

import Input from "../../components/pomodoro/input/input.component";

export const PomodoroContext = createContext({
  pomodoroState: "",
  setPomodoroState: () => {},
  pomodoroPages: {},
  timeLength: {},
  timerState: "",
  setTimerState: () => {},
  timerRunning: false,
  setTimerRunning: () => {},
});

export const PomodoroProvier = ({ children }) => {
  const [pomodoroState, setPomodoroState] = useState("userInput");
  const [timerState, setTimerState] = useState("pomodoro");
  const [timerRunning, setTimerRunning] = useState(false);

  const pomodoroPages = {
    userInput: <Input />,
    timer: "timer",
  };

  const timeLength = {
    pomodoro: 20,
    shortBreak: 5,
    longBreak: 15,
  };

  const value = {
    pomodoroState,
    setPomodoroState,
    pomodoroPages,
    timeLength,
    timerState,
    setTimerState,
    timerRunning,
    setTimerRunning,
  };
  return (
    <PomodoroContext.Provider value={value}>
      {children}
    </PomodoroContext.Provider>
  );
};
