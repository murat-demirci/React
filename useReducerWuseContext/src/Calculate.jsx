import { useContext } from "react";
import { NumberContext } from "./App";


function Calculate() {
    const {count,dispatch} = useContext(NumberContext);

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

export default Calculate;
