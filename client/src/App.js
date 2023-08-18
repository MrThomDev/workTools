import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.route";
import Home from "./routes/home/home.route";
import PriorityList from "./routes/priorityList/priorityList.route";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="prioritylist" element={<PriorityList />} />
      </Route>
    </Routes>
  );
}

export default App;
