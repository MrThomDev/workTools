import { useContext } from "react";

import Clock from "../clock/clock.component";

import { PomodoroContext } from "../../../contexts/pomodoro/pomodoro.context";

const Input = () => {
  const { timerState, setTimerState, timerRunning, setTimerRunning } =
    useContext(PomodoroContext);

  const handlePomodoroButton = (type) => {
    if (!timerRunning) {
      setTimerState(type);
    } else {
      setTimerRunning(false);
      setTimerState(type);
    }
    console.log(timerState);
  };
  return (
    <div className="input-container">
      <div className="timer-type-container">
        <button
          onClick={() => {
            handlePomodoroButton("pomodoro");
          }}
        >
          Pomodoro
        </button>
        <button
          onClick={() => {
            handlePomodoroButton("shortBreak");
          }}
        >
          Short Break
        </button>
        <button
          onClick={() => {
            handlePomodoroButton("longBreak");
          }}
        >
          Long Break
        </button>
      </div>
      <Clock />
    </div>
  );
};

export default Input;
