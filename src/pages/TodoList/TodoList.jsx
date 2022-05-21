import React from "react";
import { useTodo } from "../../context/todo-context";
import { Modal } from "../../components/export";
import { Task } from "../../components/Task/Task";
import { Link } from "react-router-dom";
import "./todolist.css";

function TodoList() {
  const { showModal, dispatch, taskAdded } = useTodo();
  return (
    <div className="todo-container">
      <Link className="links" to="/pomodoro">
        <p> Welcome back !</p>
      </Link>

      <p className="tasks-desc">
        {!taskAdded.length > 0
          ? `No task is left`
          : `you have ${taskAdded.length} task left`}
      </p>
      <div className="task">
        <div className="tasks-container">
          <h3 className="container-heading"> To do list</h3>

          <button
            className="btns todo-add modal-add-btn "
            onClick={() => dispatch({ type: "MODAL" })}
          >
            Add
          </button>
        </div>

        {showModal && <Modal />}

        <Task />
      </div>
    </div>
  );
}

export default TodoList;
{
  /* <AiOutlinePlus />
      <MdEdit />
      <MdOutlineDeleteOutline /> */
}
