import logo from "./logo.svg";
import "./App.css";
import { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state - 1;
  }
  console.log(state, action);
  return state;
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div className="App">
        <div className="divStyleBtn">
          <p>{state}</p>
          <button onClick={() => dispatch({ type: "INCREMENT" })}>
            INCREMENT
          </button>
          <button onClick={() => dispatch({ type: "DECREMENT" })}>
            DECREMENT
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
