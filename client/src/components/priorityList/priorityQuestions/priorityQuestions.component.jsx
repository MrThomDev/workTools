import PriorityAorB from "../priorityAorB/priorityAorB.component";

const PriorityQuestions = () => {
  return (
    <div className="priorityQuestions-container">
      <div className="questionPrompt">
        Which has the higher priority? Option A or Option B?
      </div>
      <div className="selection-container">
        <PriorityAorB />
      </div>
    </div>
  );
};

export default PriorityQuestions;
