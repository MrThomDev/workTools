import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { PriorityListProvier } from "./contexts/prioritylist/priorityList.context";
import { PomodoroProvier } from "./contexts/pomodoro/pomodoro.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PriorityListProvier>
        <PomodoroProvier>
          <App />
        </PomodoroProvier>
      </PriorityListProvier>
    </BrowserRouter>
  </React.StrictMode>
);
