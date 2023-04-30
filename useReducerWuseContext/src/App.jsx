import React, { useEffect, useReducer } from "react";
import "./App.css";
import Calculate from "./Calculate";

export const NumberContext = React.createContext();

const initialValue = 0;
const reducer = (state, action) => {
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
  useEffect(() => {
    console.log('rendered')
  }, [count]);
  
  return (
    <div>
      <NumberContext.Provider value={{count:count,dispatch:dispatch}}>
        <Calculate />
      </NumberContext.Provider>
    </div>
  );
}

export default App;
