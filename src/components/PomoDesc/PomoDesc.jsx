import React from "react";
import { useModal } from "../../context/modal-context";
import "./pomoDesc.css";
const PomoDesc = () => {
  const { description } = useModal();

  return (
    <>
      <div className="pomodoro">
        <div className="pomodoro-container">
          {description.map((pomo) => {
            return (
              <div className="pomodoro-container">
                <h1 className="pomo-title">{pomo.title} </h1>
                <p className="pomo-desc">{pomo.desc} </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export { PomoDesc };
