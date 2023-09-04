import { createContext, useState } from "react";

export const PomodoroContext = createContext({
  pomodoroState: "",
  setPomodoroState: () => {},
  timeLength: {},
});

export const PomodoroProvier = ({ children }) => {
  const timeLength = {
    // pomodoro: 20 * 60,
    pomodoro: 3,
    // shortBreak: 5 * 60,
    shortBreak: 1,
    // longBreak: 15 * 60,
    longBreak: 2,
  };

  const [pomodoroState, setPomodoroState] = useState("pomodoro");

  const value = {
    pomodoroState,
    setPomodoroState,
    timeLength,
  };
  return (
    <PomodoroContext.Provider value={value}>
      {children}
    </PomodoroContext.Provider>
  );
};
