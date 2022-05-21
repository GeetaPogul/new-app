import { useState } from "react";
import { useModal } from "../../context/modal-context";
import { useTodo } from "../../context/todo-context";
import "./modal.css";

const Modal = () => {
  const { editTask, dispatch, taskBeingEdited } = useTodo();

  const { timerLimit, setTimerLimit, breakLimit, setBreakLimit } = useModal();

  const [title, setTitle] = useState(editTask ? taskBeingEdited.title : "");

  const [description, setDescription] = useState(
    editTask ? taskBeingEdited.description : ""
  );

  const timeHandler = (event) => {
    setTimerLimit(() => event.target.value);
  };

  const breakHandler = (event) => {
    setBreakLimit(() => event.target.value);
  };

  return (
    <div className="modal">
      <form>
        <input
          type="text"
          placeholder="Add Title..."
          className="modal-input "
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <textarea
          cols="30"
          rows="5"
          type="text"
          placeholder="Add Decription"
          className="modal-input"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <p className="modal-heading"> Time limit</p>
        <select
          value={timerLimit}
          className="modal-limit"
          name="duration"
          id="duration"
          onChange={timeHandler}
        >
          <option value="60"> 60</option>
          <option value="45"> 45</option>
          <option value="30"> 30</option>
          <option value="15"> 15</option>
        </select>

        <p className="modal-heading"> Set break time </p>
        <select
          value={breakLimit}
          name="break"
          id="break"
          onChange={breakHandler}
          className="modal-limit"
        >
          <option value="20">20</option>
          <option value="15">15</option>
          <option value="10">10</option>
          <option value="5">5</option>
        </select>
      </form> 

      <div className="modal-buttons">
        {editTask ? (
          <button
          className="btns modal-update-btn"
            onClick={() =>
              dispatch({
                type: "UPDATE-HANDLER",
                payload: {
                  id: taskBeingEdited.id,
                  title,
                  description,
                  timerLimit,
                  breakLimit,
                },
              })
            }
          >
            Update
          </button>
        ) : (
          <div className="modal-btn ">
            <button
              className="modal-cancel-btn btns"
              onClick={() =>
                dispatch({
                  type: "CANCEL-HANDLER",
                })
              }
            >
              Cancel
            </button>

            <button
            className="modal-add-btn btns"
              onClick={() =>
                dispatch({
                  type: "ADD-TASK",
                  payload: {
                    title,
                    description,
                    timerLimit,
                    breakLimit,
                  },
                })
              }
            >
              Add
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export { Modal };
