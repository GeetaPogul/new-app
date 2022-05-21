const pomodoroReducer = (state, action) => {
  switch (action.type) {
    case "FOCUS-HANDLER":
      return {
        ...state,
        focusTimer: false,
        breakTimer: true,
      };

    case "BREAK-HANDLER":
      return {
        ...state,
        focusTimer: true,
        breakTimer: false,
      };

    case "START-HANDLER":
      return {
        ...state,
        play: true,
      };

    case "STOP-HANDLER":
      return {
        ...state,
        play: false,
      };

    case "RESTART-HANDLER":
      return {
        ...state,
        play: true,
        key: state.key + 1,
      };

    default:
      return { ...state };
  }
};

export { pomodoroReducer };
