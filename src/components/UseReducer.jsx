import React,{useReducer} from 'react'

const UseReducers = () => {

    const initialState = {count:0}

    const reducer = (state,action)=>{
        switch(action.type){
            case 'increase':{
                return {count:state.count+1}
            }
            case 'decrease':{
                return {count:state.count-1}
            }
            default:{
                return state
            }
        }
    }
    const [state,dispatch] = useReducer(reducer,initialState);

  return (
    <div>
      <h1>count : {state.count}</h1>
      <button onClick={()=>dispatch({type:"increase"})}>+1</button>
      <button onClick={()=>dispatch({type:"decrease"})}>-1</button>
    </div>
  )
}

export default UseReducers
