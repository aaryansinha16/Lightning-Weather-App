import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Dashboard from './components/Dashboard'
import RespDash from './components/RespDash'
import BgImg from './assets/bgSvg.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" >
      <Dashboard/>
      <RespDash />
    </div>
  )
}

export default App
