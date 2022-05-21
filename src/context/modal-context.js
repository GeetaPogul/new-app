import { useContext, createContext, useState } from "react";
import { useTodo } from "./todo-context";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const { editTask, taskBeingEdited } = useTodo();

  const [description, setDescription] = useState([]);

  const [breakLimit, setBreakLimit] = useState(
    editTask ? taskBeingEdited.breakLimit : 20
  );

  const [timerLimit, setTimerLimit] = useState(
    editTask ? taskBeingEdited.timerLimit : 60
  );

  return (
    <ModalContext.Provider
      value={{
        description,
        setDescription,
        breakLimit,
        setBreakLimit,
        timerLimit,
        setTimerLimit,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const useModal = () => useContext(ModalContext);

export { ModalProvider, useModal };
