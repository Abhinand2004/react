// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeContext";
import Nav from "./components/Nav";
import Home from "./components/Home";

const App = () => {
  
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
