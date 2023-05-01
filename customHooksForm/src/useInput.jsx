import { useState } from "react";

function useInput(initialValue) {
  const [value, setvalue] = useState(initialValue);

  const reset = ()=>{
    setvalue('');
  };

  const bind = {
    value,
    onChange:(e)=>{
        setvalue(e.target.value);
    }
  }
  return [value,bind,reset];
}

export default useInput