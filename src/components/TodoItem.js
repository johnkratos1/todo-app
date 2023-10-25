import { useState } from "react";

const TodoItem = ({ todo, taskList, setTaskList }) => {
  const [mutableTodo, setMutableTodo] = useState(todo);

  const toggleCompleted = () => {
    setMutableTodo({ ...mutableTodo, completed: !mutableTodo.completed });
    const updatedTodos = taskList.map((item) =>
      item.id === todo.id ? { ...item, completed: !item.completed } : item
    );
    setTaskList(updatedTodos);
  };

  const checkIcon = mutableTodo.completed ? (
    <img
      src="/icon-check.svg"
      alt="Completed"
      className="w-[30px] h-[30px] cursor-pointer"
      onClick={toggleCompleted}
    />
  ) : (
    <span
      className="border border-[#E3E4F1] w-[30px] h-[30px] rounded-full cursor-pointer"
      onClick={toggleCompleted}
    ></span>
  );

  return (
    <li className="flex items-center gap-x-6 py-5">
      {checkIcon}
      <p>{mutableTodo.content}</p>
    </li>
  );
};

export default TodoItem;
