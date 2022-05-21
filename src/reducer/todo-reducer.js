import { v4 as uuid } from "uuid";

const todoReducer = (state, action) => {
  // const {payload, type } = action;

  switch (action.type) {
    case "MODAL":
      return {
        ...state,
        showModal: true,
        editTask: false,
      };

    case "ADD-TASK":
      return {
        ...state,
        showModal: false,
        taskAdded: [
          ...state.taskAdded,
          {
            id: uuid(),
            title: action.payload.title,
            desc: action.payload.description,
            timerLimit: action.payload.timerLimit,
            breakLimit: action.payload.breakLimit,
          },
        ],
      };

    case "DELETE-HANDLER":
      return {
        ...state,
        taskAdded: [...action.payload.filter((todo) => todo.id !== action.id)],
      };

    case "CANCEL-HANDLER":
      return {
        ...state,
        showModal: false,
      };

    case "UPDATE-HANDLER":
      return {
        ...state,
        taskAdded: [
          ...state.taskAdded.map((task) => {
            if (task.id === action.payload.id) {
              return {
                ...task,
                title: action.payload.title,
                desc: action.payload.desc,
                timerLimit: action.payload.timerLimit,
                breakLimit: action.payload.breakLimit,
              };
            }

            return task;
          }),
        ],

        showModal: false,
      };

    case "EDIT-HANDLER":
      return {
        ...state,
        showModal: true,
        editTask: true,
        taskBeingEdited: action.payload,
      };

    default:
      return state;
  }
};
export { todoReducer };
