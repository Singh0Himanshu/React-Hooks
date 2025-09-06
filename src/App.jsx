import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseStates from './components/UseStates'
import UseEffects from './components/UseEffects'
import UseRefs from './components/UseRefs'
import UseMemo from './components/UseMemo'
import Header from './components/Header'
import UseReducers from './components/useReducer'

function App() {
  const [count, setCount] = useState(0);

  const newfn =useCallback(()=>{},[]) // now it will not render the function , it will take the same function reference from the memory.
  // if we use without the useCallback then it will render each time on state change
  return (
    <>
    {/* <UseStates/> */}
    {/* <UseEffects/> */}
    {/* <UseRefs/> */}
    {/* <UseMemo/> */}
    {/* <div> // For understanding of useCallbak
       <Header newfn={newfn}/>
       <h1>count : {count}</h1>
       <button onClick={()=>setCount((prev)=>prev+1)}>click to increase</button>
    </div> */}

    <UseReducers/>
    </>
  )
}

export default App
