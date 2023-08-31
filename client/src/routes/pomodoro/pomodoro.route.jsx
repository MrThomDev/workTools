import { useContext } from "react";
import { PomodoroContext } from "../../contexts/pomodoro/pomodoro.context";
import Input from "../../components/pomodoro/input/input.component";
const Pomodoro = () => {
  const { pomodoroState, pomodoroPages } = useContext(PomodoroContext);
  return (
    <div className="pomodoro-container">
      <Input />
    </div>
  );
};

export default Pomodoro;
