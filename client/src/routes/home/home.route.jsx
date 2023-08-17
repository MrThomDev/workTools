import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div id="home-div">
      <h1>Work Tools Home Page</h1>
      <Outlet />
    </div>
  );
};

export default Home;
