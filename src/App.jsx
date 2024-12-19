import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route,Router } from 'react-router-dom'
import Data from './components/home'
import Navbar from './components/Nav'
function App() {


  return (
    <>
    <BrowserRouter>
      <Navbar></Navbar>
    <Routes>
      <Route  path='/' element={<Data/>}/>

    </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
