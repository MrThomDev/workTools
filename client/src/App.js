import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.route";
import Home from "./routes/home/home.route";
import PriorityList from "./routes/priorityList/priorityList.route";
import "./App.css";
import Pomodoro from "./routes/pomodoro/pomodoro.route";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="prioritylist" element={<PriorityList />} />
        <Route path="pomodoro" element={<Pomodoro />} />
      </Route>
    </Routes>
  );
}

export default App;
