import { useContext, createContext, useReducer } from "react";

import { todoReducer } from "../reducer/todo-reducer";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [{ showModal, taskAdded, editTask, taskBeingEdited }, dispatch] =
    useReducer(todoReducer, {
      showModal: false,
      taskAdded: [],
      editTask: false,
      taskBeingEdited: null,
    });
  return (
    <TodoContext.Provider
      value={{
        showModal,
        taskAdded,
        editTask,
        taskBeingEdited,
        dispatch,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

const useTodo = () => useContext(TodoContext);

export { useTodo, TodoProvider };
