import React from "react";
import FitbitIcon from "@mui/icons-material/Fitbit";
import "./Header.css";

function Header() {
  return (
    <header className="head_todo">
      <h1 className="logo_app">
        <span className="m_icon">
          <FitbitIcon htmlColor="white" fontSize="medium" />
        </span>
        ToDoList
      </h1>
    </header>
  );
}

export default Header;
