import { useState } from "react";
import "./App.css";
import Characters from "./Characters";

function App() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      <Characters input={input} />
    </div>
  );
}

export default App;
