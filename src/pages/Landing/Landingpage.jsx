import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./landingpage.css";

function Landingpage() {
  return (
    <>
      <div className="container">
        <div className="img-div">
          <img className="landing-img" src="./home-img.png" alt="time-img" />
        </div>

        <div className="content-container">
          <span>
            People to work with the time they have rather then against it. Using
            POMODORO, you break your workday into 25-minute separated by
            five-minute breaks. These intervals are referred by pomodoros.
            Basically is is a time management system.
            <br /> <br />
            <Link to="/todolist" className="links">
              <button className="btn btn-primary">Check your task</button>
            </Link>
          </span>
          <br />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Landingpage;
