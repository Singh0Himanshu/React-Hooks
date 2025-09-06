import React, { useMemo, useState } from 'react'

const UseMemo = () => {

    const [number,setnumber] = useState(0)
    const [counter,setCounter] = useState(0)

    console.log("Done render")
    function cube(number){
        console.log("Calculation Done",Math.pow(number,3));
        return Math.pow(number,3);
    };
    const result = useMemo(()=>cube(number),[number]);

  return (
    <>
      <input type="number" value={number} onChange={(e)=>setnumber(e.target.value)} />
      <h2>cube of the numbe:{result}</h2>
      <button onClick={()=>{setCounter(counter+1)}}>click</button>
      <h2>counter numbe:{counter}</h2>
    </>
  )
}

export default UseMemo
