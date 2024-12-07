import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
const tost=()=>{
  toast.success('🦄 Wow so easy!', {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",

    });
}

  return (
    <div>
    <button onClick={tost}>Notify!</button>
    <ToastContainer />
  </div>
  )
}

export default App
