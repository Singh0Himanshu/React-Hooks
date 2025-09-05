import React, { useEffect, useState } from 'react'

const UseEffects = () => {

    const [count ,setCount]= useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setCount(count+1);
        },5000);
    },[])
  return (
    <div>
      <h1>I hav rendered {count} time</h1>
    </div>
  )
}

export default UseEffects
