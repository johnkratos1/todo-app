import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import TodoFilterControl from "./TodoFilterControl";

const TodoList = ({
  taskList,
  setTaskList,
  filteredTodos,
  filter,
  setFilter,
  isDark,
}) => {
  const [leftTodoCount, setLeftTodoCount] = useState(0);

  useEffect(() => {
    const unCompletedTodos = taskList.filter((todo) => !todo.completed);
    setLeftTodoCount(unCompletedTodos.length);
  }, [taskList]);

  const textPlacer = filter === "completed" ? "completed" : "active";

  const clearCompletedTodos = () => {
    setTaskList(taskList.filter((todo) => !todo.completed));
    setFilter("all");
  };

  return (
    <>
      <section
        className={`w-full ${
          isDark ? "bg-[#25273D] text-white" : "bg-white text-[#25273D]"
        } mt-6 rounded-lg drop-shadow-2xl p-4`}
      >
        {filteredTodos.length < 1 ? (
          <p className="info-text">There's no {textPlacer} task</p>
        ) : (
          <ul
            className={`divide-y ${
              isDark ? "divide-[#393A4B]" : "divide-[#E3E4F1]"
            }`}
          >
            {filteredTodos.map((todo) => (
              <TodoItem
                todo={todo}
                key={todo.id}
                setTaskList={setTaskList}
                taskList={taskList}
              />
            ))}
          </ul>
        )}

        <div
          className={`flex justify-between mt-6 ${
            isDark ? "text-[#5B5E7E]" : "text-[#9495A5]"
          }`}
        >
          <div className="todos-count">{leftTodoCount} items left</div>

          <div className="hidden lg:inline">
            <TodoFilterControl filter={filter} setFilter={setFilter} />
          </div>

          <div className="control-btn">
            <button className="btn" onClick={clearCompletedTodos}>
              Clear Completed
            </button>
          </div>
        </div>
      </section>

      <div
        className={`lg:hidden ${
          isDark ? "bg-[#25273D] text-white" : "bg-white text-[#25273D]"
        } flex justify-center mt-6 rounded-xl p-4`}
      >
        <TodoFilterControl filter={filter} setFilter={setFilter} />
      </div>
    </>
  );
};

export default TodoList;
