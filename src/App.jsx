import { useState } from 'react'
import './App.css'
import Index from './Components/Index'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Add from './Components/Add';
import Details from './Components/Details';

function App() {
 

  return (
    <>
      <Router>
      <Routes>
      
        <Route path="/" element={< Index/>} />
        
        <Route path="/Add" element={<Add />} />
        <Route path="/details" element={<Details />} />

      </Routes>
    </Router>
    </>
  )
}

export default App
