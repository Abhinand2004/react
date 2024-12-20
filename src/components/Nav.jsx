import React from "react";
import { useTheme } from "./ThemeContext";
import { FaSun,FaMoon } from "react-icons/fa";

const Nav = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <nav
        style={{
          background: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#000" : "#fff",
          padding: "10px", 
        }}
      >
        <input
          type="text"
          placeholder="Search"
          style={{
            backgroundColor: theme === "light" ? "#fff" : "#555", 
            color: theme === "light" ? "#000" : "#fff", 
            border: `1px solid ${theme === "light" ? "#ccc" : "#444"}`,
            padding: "5px",
            borderRadius: "4px",
            marginRight: "10px",
          }}
        />
        <button
          onClick={toggleTheme}
          style={{
            backgroundColor: theme === "light" ? "#444" : "#444",
            color: theme === "light" ? "#fff" : "#ddd",
            border: "none",
            padding: "10px 15px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
           {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
      </nav>
    </div>
  );
};

export default Nav
