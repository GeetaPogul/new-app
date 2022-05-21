import React, { useReducer } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useModal } from "../../context/modal-context";
import { pomodoroReducer } from "../../reducer/pomodoro-reducer";
import "./pomotimer.css";

const PomoTimer = () => {
  const { timerLimit, breakLimit } = useModal();

  const buttons = [
    {
      btnType: "START-HANDLER",
      btnName: "start",
      btnClass: "start btn",
    },
    {
      btnType: "STOP-HANDLER",
      btnName: "stop",
      btnClass: "stop btn",
    },
    {
      btnType: "RESTART-HANDLER",
      btnName: "restart",
      btnClass: "restart btn",
    },
  ];

  const [{ play, focusTimer, breakTimer, key }, dispatch] = useReducer(
    pomodoroReducer,
    {
      play: true,
      focusTimer: true,
      breakTimer: false,
      key: 1,
    }
  );

  const timer = ({ remainingTime }, mode) => {
    const minute = Math.floor((remainingTime % 3600) / 60);
    const second = Math.floor(remainingTime % 60);

    const minutes = `${minute < 10 ? "0" + minute : minute}`;

    const seconds = `${second < 10 ? "0" + second : second}`;

    if (mode === "focus") {
      return (
        <div>
          <span className="focus-text"> Focus mode</span>
          <h1 className="focus-mode">
            {minutes} : {seconds}
          </h1>
          <p className="remaining-time focus-time">
            out of {timerLimit} minutes
          </p>
        </div>
      );
    }

    if (mode === "break") {
      return (
        <div>
          <span> Break mode</span>
          <h1 className="break-mode">
            {minutes} : {seconds}
          </h1>
          <p className="remaining-time break-time">
            out of {breakLimit} minutes
          </p>
        </div>
      );
    }
  };

  return (
    <>
      <div className="pomodoro-timer">
        <div className="timer">
          {focusTimer && (
            <CountdownCircleTimer
              key={key}
              isPlaying={play}
              duration={timerLimit * 60}
              colors={["blue", "green", "red"]}
              colorsTime={[breakLimit * 60, 10, 0]}
              onComplete={() =>
                dispatch({
                  type: "FOCUS-HANDLER",
                })
              }
              size={400}
              strokeWidth={25}
              trailColor={"orange"}
            >
              {({ remainingTime }) => timer({ remainingTime }, "focus")}
            </CountdownCircleTimer>
          )}

          {breakTimer && (
            <CountdownCircleTimer
              isPlaying={play}
              duration={breakLimit * 60}
              colors={["blue", "green", "red"]}
              colorsTime={[breakLimit * 60, 10, 0]}
              onComplete={() => dispatch({ type: "BREAK-HANDLER" })}
              key={key}
              size={400}
              strokeWidth={16}
              trailColor={"orange"}
            >
              {({ remainingTime }) => timer({ remainingTime }, "break")}
            </CountdownCircleTimer>
          )}
        </div>

        <div className="buttons">
          {buttons.map(({ btnType, btnName, btnClass }) => {
            return (
              <button
                className={btnClass}
                onClick={() =>
                  dispatch({
                    type: btnType,
                  })
                }
              >
                {btnName}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export { PomoTimer };
