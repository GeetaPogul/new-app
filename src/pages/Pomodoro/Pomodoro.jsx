import React from "react";
import { Link } from "react-router-dom";
import "./pomodoro.css";

const Pomodoro = () => {
  return (
    <>
      <h1> POMODORO TIMER.</h1>

      <Link to="/todolist"> 
      <i className="fa fa-chevron-left left-arrow" ></i></Link>
    </>
  );
};

export default Pomodoro ;
