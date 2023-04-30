import { useState, useReducer } from "react";
import "./App.css";

const initialValue = 0;
const reducer = (state, action) => {
  console.log("state: " + state + " action: " + action);
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;

    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialValue);
  console.log("count: " + count);
  return (
    <div>
      <h3>{count}</h3>
      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch("decrement");
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch("reset");
        }}
      >
        C
      </button>
    </div>
  );
}

export default App;
