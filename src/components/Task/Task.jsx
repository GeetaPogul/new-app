import React from "react";
import { MdEdit, MdOutlineDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useModal } from "../../context/modal-context";
import { useTodo } from "../../context/todo-context";
import "./task.css";

const Task = () => {
  const { taskAdded, dispatch } = useTodo();
  const { setDescription } = useModal();

  const navigate = useNavigate();

  const titleHandler = (title, desc) => {
    navigate("/pomodoro");
    setDescription([{ title, desc }]);
  };
  return (
    <>
      {taskAdded &&
        taskAdded.map((task) => {
          const { id, title, desc } = task;

          return (
            <div className="single-task-div" key={id}>
              <div
                className="task-title"
                onClick={() => titleHandler(title, desc)}
              >
                {title}
              </div>

              <div className="task-btn">
                <MdOutlineDeleteOutline
                  className="task-delete"
                  onClick={() =>
                    dispatch({
                      type: "DELETE-HANDLER",
                      payload: taskAdded,
                      id,
                    })
                  }
                />

                <MdEdit
                  className="task-edit"
                  onClick={() =>
                    dispatch({
                      type: "EDIT-HANDLER",
                      payload: task,
                    })
                  }
                />
              </div>
            </div>
          );
        })}
    </>
  );
};

export { Task };
