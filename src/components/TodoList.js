import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import TodoFilterControl from "./TodoFilterControl";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

const TodoList = ({
  taskList,
  setTaskList,
  filteredTodos,
  setFilteredTodos,
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

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;
    // let add, active = filteredTodos;
    // // if(source.droppableId = 'filteredTodos')
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
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="filteredTodos">
              {(provided) => (
                <ul
                  className={`divide-y ${
                    isDark ? "divide-[#393A4B]" : "divide-[#E3E4F1]"
                  }`}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {filteredTodos.map((todo, index) => (
                    <TodoItem
                      todo={todo}
                      setTaskList={setTaskList}
                      taskList={taskList}
                      index={index}
                      key={todo.id}
                    />
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
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
