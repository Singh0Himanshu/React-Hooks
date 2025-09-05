import React, { useState } from 'react'

const UseStates = () => {
    const [color,setColor] = useState('red');
    const [buttonColor,setButtonColor] = useState("blue");

    const [car,setCar] = useState({
        brand:"ferrari",
        year:2023,
        color:"red",
        model:"roma"
    })

    const changeColor = ()=>{
        color === "red"? setColor("blue"):setColor("red");
        buttonColor === "blue"? setButtonColor("red"):setButtonColor("blue");
    }

    const handleData = ()=>{
        setCar({...car,color:"blue"});
        console(car);
    }

  return (
    <>
    <p>this is ample for chnage test in github</p>
      <h1>Hello , I am Himanshu Singh</h1>
      <p>I love {color} color.</p>
      <button type="button" onClick={changeColor}>{buttonColor}</button>
      <br/>
      <h1>My {car.brand}</h1>
      <p>It is {car.color} {car.model} from {car.year}</p>
      <button type="button" onClick={handleData}>change data</button>
    </>
  )
}

export default UseStates
