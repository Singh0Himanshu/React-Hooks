import React, { useEffect, useState } from 'react'

const UseEffects = () => {

    const [count ,setCount]= useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setCount(count+1);
        },5000);
    },[]) // if I remove the dependency than it will work  like timer and keep increasing the timer by 1 every time.
  return (
    <div>
      <h1>I hav rendered {count} time</h1>
    </div>
  )
}

export default UseEffects
