import { useContext } from "react";
import { PomodoroContext } from "../../contexts/pomodoro/pomodoro.context";

const Pomodoro = () => {
  const { pomodoroState, pomodoroPages } = useContext(PomodoroContext);
  return (
    <div className="pomodoro-container">
      {pomodoroPages[`${pomodoroState}`]}
    </div>
  );
};

export default Pomodoro;
