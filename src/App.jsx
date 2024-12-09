
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
// import Asd from './Asd'
// import Bsd from './Bsd'
import { lazy, Suspense } from 'react'

let Asd=lazy(()=>setData(import("./Asd")))
let Bsd=lazy(()=>setData(import("./Bsd")))

function App() {

console.log("app");

  return (
    <>
      <BrowserRouter>
      <Suspense fallback={<h1>Loading....</h1>}>

    <Routes>
      <Route path='/' element={<Asd/>}/>
      <Route path='/bsd' element={<Bsd/>}/>

    </Routes>
    </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App

async function setData(comp) {
  await new Promise((res)=>setTimeout(res,3000))
  return comp
}