import React from 'react'
import {Link,Route, Routes} from "react-router-dom";
import Landingpage from '../../pages/Landing/Landingpage';
import TodoList from "../../pages/TodoList/TodoList"
import Signup from '../../pages/Signup/Signup';
import "./navbar.css";
function Navbar() {
  return (
    <div>

        
    <nav className='links-container'>
     <Link className='nav-links' to="/" > POMODORO</Link>
     {/* <Link className='nav-links' to="/login" > todolist</Link> */}
     {/* <Link className='nav-links' to="/signup" > Signup</Link> */}
    </nav>

    <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

    </div>
  )
}

export default Navbar