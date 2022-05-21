import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Landingpage from "../../pages/Landing/Landingpage";
import TodoList from "../../pages/TodoList/TodoList";
import Pomodoro from "../../pages/Pomodoro/Pomodoro";
import "./navbar.css";
function Navbar() {
  return (
    <div>
      <nav className="links-container">
        <Link className="nav-links" to="/">
          POMODORO
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/pomodoro" element={<Pomodoro />} />
      </Routes>
    </div>
  );
}

export default Navbar;
