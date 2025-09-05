import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseStates from './components/UseStates'
import UseEffects from './components/UseEffects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <UseStates/> */}
    <UseEffects/>
    </>
  )
}

export default App
