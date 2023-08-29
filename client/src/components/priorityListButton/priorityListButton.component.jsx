import "./priorityListButton.style.css";

const PriorityListButton = ({ onHandle, btnText }) => {
  return (
    <button className="priority-btn" onClick={onHandle}>
      {btnText}
    </button>
  );
};

export default PriorityListButton;
