import { createContext, useState, useEffect } from "react";

import Input from "../../components/pomodoro/input/input.component";

export const PomodoroContext = createContext({
  pomodoroState: "",
});

export const PomodoroProvier = ({ children }) => {
  const timeLength = {
    pomodoro: 20,
    shortBreak: 5,
    longBreak: 15,
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const [pomodoroState, setPomodoroState] = useState("userInput");
  const [timerState, setTimerState] = useState("pomodoro");
  const [timerRunning, setTimerRunning] = useState(false);
  const [remainingTime, setRemainingTime] = useState(
    timeLength[timerState] * 60
  );
  const [displayTime, setDisplayTime] = useState(formatTime(remainingTime));

  const pomodoroPages = {
    userInput: <Input />,
    timer: "timer",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (remainingTime > 0 && timerRunning) {
        setRemainingTime((prevTime) => prevTime - 1);
        setDisplayTime(formatTime(remainingTime));
      }
    }, 1000); // Update every 1 second

    return () => clearInterval(interval);
  }, [timerRunning]);

  const value = {
    pomodoroState,
    setPomodoroState,
    pomodoroPages,
    timeLength,
    timerState,
    setTimerState,
    timerRunning,
    setTimerRunning,
    remainingTime,
    setRemainingTime,
    displayTime,
    setDisplayTime,
    formatTime,
  };
  return (
    <PomodoroContext.Provider value={value}>
      {children}
    </PomodoroContext.Provider>
  );
};
