import React from "react";
import { Link } from "react-router-dom";
import { PomoDesc } from "../../components/PomoDesc/PomoDesc";
import { PomoTimer } from "../../components/PomoTimer/PomoTimer";
import "./pomodoro.css";

const Pomodoro = () => {
  return (
    <>
      <Link to="/todolist">
        <i className="fa fa-chevron-left left-arrow"></i>
      </Link>
      <div>
        <div className="desc">
          <PomoDesc />
        </div>

        <PomoTimer />
      </div>
    </>
  );
};

export default Pomodoro;
