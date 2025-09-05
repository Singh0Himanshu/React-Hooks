import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseStates from './components/UseStates'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UseStates/>
    </>
  )
}

export default App
