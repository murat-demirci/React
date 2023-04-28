import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [can, setCan] = useState(0);
  const [mur, setMur] = useState(0);

  useEffect(() => {
    /* componentler ilk kez render edildiginde calisir ve
    statelerde degisiklik oldugunda calisir, her zaman calisir
    */
   console.log('Her zaman calisir')
  });

  useEffect(() => {
    /* componentler ilk kez render edildiginde calisir.*/
    console.log("componentler ilk kez render edildiginde calisir.");
  }, []);

  useEffect(() => {
    /* componentler ilk kez render edildiginde calisir ve
    verilen statelerde degisiklik oldugunda calisir.
    */
    console.log(
      "componentler ilk kez render edildiginde calisir ve verilen statelerde degisiklik oldugunda calisir."
    );
  }, [can]);

  return (
    <div className="App">
      <div className="firt-div">
        <button
          onClick={() => {
            setCan(can + 1);
          }}
        >
          Can ++
        </button>
        <div>Can: {can}</div>
      </div>
      <div>
        <button
          onClick={() => {
            setMur(mur + 1);
          }}
        >
          Mur ++
        </button>
        <div>Mur: {mur}</div>
      </div>
    </div>
  );
}

export default App;
