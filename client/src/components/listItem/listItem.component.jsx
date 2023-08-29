const UnsortedListItem = ({ index, item }) => {
  return (
    <div className="unsortedList-container" key={index}>
      <span>{`${index + 1}: `}</span>
      <span>{item}</span>
    </div>
  );
};

export default UnsortedListItem;
