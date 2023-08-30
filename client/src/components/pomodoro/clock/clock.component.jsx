import { useState, useEffect, useContext } from "react";

import { PomodoroContext } from "../../../contexts/pomodoro/pomodoro.context";

const Clock = () => {
  const { timerState, timeLength, timerRunning, setTimerRunning } =
    useContext(PomodoroContext);

  const [remainingTime, setRemainingTime] = useState(
    timeLength[timerState] * 60
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (remainingTime > 0 && timerRunning) {
        setRemainingTime((prevTime) => prevTime - 1);
      }
    }, 1000); // Update every 1 second

    return () => clearInterval(interval);
  }, [remainingTime, timerRunning]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleStartPause = () => {
    setTimerRunning(timerRunning ? false : true);
    console.log("stuff");
  };

  return (
    <div className="clock-container">
      <span className="timer">{formatTime(remainingTime)}</span>
      <button onClick={handleStartPause}>Start/Pause</button>
    </div>
  );
};

export default Clock;
