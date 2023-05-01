import { useState, useTransition } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [myList, setMylist] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setInput(e.target.value);

    startTransition(() => {
      const myArray = [];
      for (let i = 0; i < 2000; i++) {
        myArray.push(e.target.value);
      }
      setMylist(myArray);
    });
  };
  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />

      {isPending ? 'Loading...' : myList.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </div>
  );
}

export default App;
