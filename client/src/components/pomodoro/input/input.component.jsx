import React, { useState, useEffect, useContext } from "react";
import { PomodoroContext } from "../../../contexts/pomodoro/pomodoro.context";

function Input() {
  const { pomodoroState, setPomodoroState, timeLength } =
    useContext(PomodoroContext);
  const [countdown, setCountdown] = useState(timeLength[pomodoroState]);
  const [timerRunning, setTimerRunning] = useState(false);
  const [cycleCount, setCycleCount] = useState({
    pomodoro: 0,
    shortBreak: 0,
    longBreak: 0,
  });

  useEffect(() => {
    if (countdown >= 0 && timerRunning) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (countdown < 0) {
      setCycleCount((prevCycleCount) => ({
        ...prevCycleCount,
        [pomodoroState]: prevCycleCount[pomodoroState] + 1,
      }));
    }
  }, [countdown, timerRunning]);

  useEffect(() => {
    setTimerRunning(false);
    setCountdown((prevCountdown) => timeLength[pomodoroState]);
  }, [pomodoroState]);

  useEffect(() => {
    if (cycleCount.pomodoro === 0) {
      return;
    }
    if (cycleCount.pomodoro % 4 !== 0 && pomodoroState === "pomodoro") {
      setPomodoroState("shortBreak");
    } else if (cycleCount.pomodoro % 4 === 0 && pomodoroState === "pomodoro") {
      setPomodoroState((oldState) => "longBreak");
    } else {
      setPomodoroState("pomodoro");
    }
  }, [cycleCount.pomodoro, cycleCount.shortBreak, cycleCount.longBreak]);

  const handleButtonClick = (state) => {
    if (timerRunning) {
      setTimerRunning(false);
    }
    setPomodoroState(state);
    setCountdown((prevCountdown) => timeLength[state]);
  };

  const handleStart = () => {
    setTimerRunning((old) => (old ? false : true));
  };

  const handleReset = () => {
    setTimerRunning(false);
    setCountdown(timeLength[pomodoroState]);
  };

  const displayCountdown = () => {
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div>
      <div>
        <button onClick={() => handleButtonClick("pomodoro")}>Pomodoro</button>
        <button onClick={() => handleButtonClick("shortBreak")}>
          Short Break
        </button>
        <button onClick={() => handleButtonClick("longBreak")}>
          Long Break
        </button>
      </div>
      <div>
        <p>Pomodoro State: {pomodoroState}</p>
        <p>Countdown: {displayCountdown()}</p>
      </div>
      <button onClick={handleStart}>Start/Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Input;
