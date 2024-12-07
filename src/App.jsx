import { useEffect, useState } from 'react'
import './App.css'
import WithLoader from './HOC.jsx'
import BaseComponent from './BaseComponent'

function App() {
  const [data,setData] = useState([])
  const [isLoading,setIsloading]=useState(true)
  const EnhancedDataDisplay=WithLoader(BaseComponent)

  useEffect(()=>{
    setTimeout(() => {
      setData(["item1","item2","item3","item4","item5"])
      setIsloading(false)
    }, 5000);
  },[])
  return( <EnhancedDataDisplay isLoading={isLoading} data={data}/>)
}

export default App
