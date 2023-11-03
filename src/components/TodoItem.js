import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";

const TodoItem = ({ todo, taskList, setTaskList, index }) => {
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
    <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <li
          className="flex items-center gap-x-6 py-5"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {checkIcon}
          <p>{mutableTodo.content}</p>
        </li>
      )}
    </Draggable>
  );
};

export default TodoItem;
