import { Outlet, Link } from "react-router-dom";
import "./navigation.style.css";

const Navigation = () => {
  return (
    <div>
      <div className="navigation-container">
        <Link className="link" to={"/"}>
          Home
        </Link>
        <Link className="link" to={"prioritylist"}>
          Priority List
        </Link>
        <Link className="link" to={"pomodoro"}>
          Pomodoro
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
