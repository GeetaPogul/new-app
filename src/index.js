import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { TodoProvider } from "./context/todo-context";
import { ModalProvider } from "./context/modal-context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <TodoProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </TodoProvider>
    </Router>
  </React.StrictMode>
);
