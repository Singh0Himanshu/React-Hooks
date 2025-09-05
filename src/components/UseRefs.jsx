import React, { useEffect, useState,useRef } from 'react'

const UseRefs = () => {
    const [value,setValue] = useState(0)
    
    const count =  useRef(0) // To access the value we use current property
    useEffect(()=>{  // useRef is not rendering the component on changes in value.
        count.current = count.current+1;
    });

    // const [count,setCount] = useState(0)
    // useEffect(()=>{
    //     setCount(prev=>prev+1) this code will run continuously because we are not giving the dependency and it will run on every state changes like chnages in setCount
    // }) to tackle this problem we use useRef

    const inputref = useRef();
    const handleClick = () =>{
        console.log(inputref.current)
    }
  return (
    <>
      <button onClick={()=>{setValue(prev=>prev+1)}}>+</button>
      <h1>{value}</h1>
      <button onClick={()=>{setValue(prev=>prev-1)}}>-</button>
      <h2>count:{count.current}</h2>

      {/* Access the DOM element using useRef */}
      <input type="text" ref={inputref}/>
      <button onClick={handleClick}>click</button>
    </>
  )
}

export default UseRefs
