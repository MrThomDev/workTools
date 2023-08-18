const UnsortedListItem = ({ index, item }) => {
  return (
    <div className="unsortedList-container">
      <span>{index + 1}</span>
      <span>{item}</span>
    </div>
  );
};

export default UnsortedListItem;
