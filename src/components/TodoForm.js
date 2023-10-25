import { useState } from "react";

const generateId = (array) => {
  const ids = array.map((item) => item.id);
  return Math.max(...ids) + 1;
};

const TodoForm = ({ taskList, setTaskList, isDark }) => {
  const [taskInp, setTaskInp] = useState("");

  const handleChange = (e) => {
    setTaskInp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskInp) {
      const newTodo = {
        id: generateId(taskList),
        content: taskInp.trim(),
        completed: false,
      };

      setTaskList([newTodo, ...taskList]);
      setTaskInp("");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`mt-10 ${
          isDark ? "bg-[#25273D] text-white" : "bg-white text-[#25273D]"
        } px-6 py-4 flex items-center gap-4 rounded-md`}
      >
        <span className="border border-[#E3E4F1] w-[25px] h-[25px] rounded-full"></span>
        <input
          type="text"
          className="outline-none text-xl bg-transparent"
          placeholder="Create a new todo…"
          value={taskInp}
          onChange={handleChange}
        />
        <button type="submit" className="hidden">
          Add
        </button>
      </form>
    </>
  );
};

export default TodoForm;
