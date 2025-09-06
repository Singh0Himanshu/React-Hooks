import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseStates from './components/UseStates'
import UseEffects from './components/UseEffects'
import UseRefs from './components/UseRefs'
import UseMemo from './components/UseMemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <UseStates/> */}
    {/* <UseEffects/> */}
    {/* <UseRefs/> */}
    <UseMemo/>
    </>
  )
}

export default App
