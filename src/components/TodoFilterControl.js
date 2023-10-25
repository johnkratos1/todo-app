const TodoFilterControl = ({ filter, setFilter }) => {
  const handleClick = (status) => {
    setFilter(status);
  };

  return (
    <div className="flex lg:gap-3 gap-8">
      <button
        className={filter === "all" ? "text-[#3A7CFD]" : ""}
        onClick={() => handleClick("all")}
      >
        All
      </button>
      <button
        className={filter === "active" ? "text-[#3A7CFD]" : ""}
        onClick={() => handleClick("active")}
      >
        Active
      </button>
      <button
        className={filter === "completed" ? "text-[#3A7CFD]" : ""}
        onClick={() => handleClick("completed")}
      >
        Completed
      </button>
    </div>
  );
};

export default TodoFilterControl;
