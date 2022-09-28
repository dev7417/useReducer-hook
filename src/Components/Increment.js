import React from "react";
import { useReducer } from "react";


const initialState = 0;
const reducer = (state, action)=>{
  if(action.type === "INCREMENT"){
    return state + 1;
  }if(action.type ===  "DECREMENT"){
    return state - 1;
  }
}

export default function Increment() {

    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="Container">
      <p>{state}</p>
      <button type="submit" onClick={()=>dispatch({type:"INCREMENT"})}>INC</button>
      <button type="submit" onClick={()=>dispatch({type:"DECREMENT"})}>DEC</button>
    </div>
  );
}
