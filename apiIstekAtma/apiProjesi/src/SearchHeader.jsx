import { useState } from "react";
import "./Form.css";

function Search({ search }) {
  const [value, setValue] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    search(value);
  };

  const handleChange = (e)=>{
    setValue(e.target.value);
  }
  return (
    <div>
      <form className="formElement" onSubmit={handleFormSubmit}>
        <label htmlFor="">What are you looking?</label>
        <input value={value} onChange={handleChange} type="text" />
      </form>
    </div>
  );
}

export default Search;
