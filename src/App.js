import { useEffect, useState } from "react";
import "./App.css";
import { FaMoon } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const data = [
  { id: 1, content: "Complete online JavsScript course", completed: true },
  { id: 2, content: "Jog around the park 3x", completed: false },
  { id: 3, content: "10 minutes meditation", completed: false },
  { id: 4, content: "Read for 1 hour", completed: false },
  { id: 5, content: "Pick up groceries", completed: false },
  { id: 6, content: "Complete Todo App on Frontend Mentor", completed: false },
];

function App() {
  const [isDark, setIsDark] = useState(false);
  const [taskList, setTaskList] = useState(data);
  const [filter, setFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(taskList);

  useEffect(() => {
    const handleFilter = () => {
      switch (filter) {
        case "active":
          return setFilteredTodos(taskList.filter((task) => !task.completed));

        case "completed":
          return setFilteredTodos(taskList.filter((task) => task.completed));

        default:
          return setFilteredTodos(taskList);
      }
    };
    handleFilter();
  }, [taskList, filter]);

  return (
    <>
      <div className="w-[100vw] h-[100vh]">
        <div
          className={`w-full ${
            isDark ? "bg-header-dark" : "bg-header-light"
          } bg-no-repeat bg-cover h-[35%]`}
        ></div>
        <div
          className={`w-full h-[80%] ${
            isDark ? "bg-[#171823]" : "bg-white"
          } relative flex justify-center`}
        >
          <div className="lg:w-1/3 w-10/12 absolute -top-48">
            <div className="flex justify-between items-center">
              <h1 className="text-5xl font-semibold tracking-widest text-white">
                TODO
              </h1>
              {isDark ? (
                <BsFillSunFill
                  className="text-white text-2xl"
                  onClick={() => {
                    setIsDark(!isDark);
                  }}
                />
              ) : (
                <FaMoon
                  className="text-white text-2xl"
                  onClick={() => {
                    setIsDark(!isDark);
                  }}
                />
              )}
            </div>
            <TodoForm
              taskList={taskList}
              setTaskList={setTaskList}
              isDark={isDark}
            />
            <div>
              <TodoList
                taskList={taskList}
                setTaskList={setTaskList}
                filteredTodos={filteredTodos}
                filter={filter}
                setFilter={setFilter}
                isDark={isDark}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
