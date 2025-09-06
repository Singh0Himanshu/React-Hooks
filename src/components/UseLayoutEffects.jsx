import React, { useEffect, useLayoutEffect } from 'react'

const UseLayoutEffects = () => {
    useEffect(()=>{
        console.log("useEffect is running");
    },[])
    useLayoutEffect(()=>{
        console.log("useLayoutEffect is running");
    },[])
  return (
    <div>
      <p>Hello</p>
    </div>
  )
}

export default UseLayoutEffects
