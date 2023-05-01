import { useState,useEffect,useRef } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  //const [renderCount, setRenderCount] = useState(0)
  const renderCount = useRef(0);
  //{current:0}
  const inputRef = useRef();
  useEffect(() => {
   //setRenderCount((prev)=>prev + 1); //infinite loop
   renderCount.current = renderCount.current + 1; 
  });

  const focusInput = ()=>{
    console.log(inputRef.current) //input html element
    inputRef.current.focus();
    inputRef.current.value = 'murat';
    setName(inputRef.current.value);
  }
  
  return (
    <div>
      <input
      ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        My Name is {name}
      </div>
      <div>{renderCount.current} times rendered</div>
      <button onClick={focusInput}>Focus</button>
    </div>
  );
}

export default App;
