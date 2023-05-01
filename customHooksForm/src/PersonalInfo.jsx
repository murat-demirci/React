import React from "react";
import { useState } from "react";
import useInput from "./useInput";

function PersonalInfo() {
    const [firstName,bindFirstName,resetFirstName] =useInput('');
    const [lastName,bindLastName,resetLastName] =useInput('');

  const sumbitForm = (e)=>{
        e.preventDefault();
        alert(`Name: ${firstName} Surname: ${lastName}`);
        resetFirstName();
        resetLastName();
  }
  return (
    <div>
      <form onSubmit={sumbitForm}>
        <div>
          <label>Name </label>
          <input
            type="text"
            {...bindFirstName}
          />
        </div>
        <div>
          <label>Surname </label>
          <input
            type="text"
            {...bindLastName}
          />
        </div>
        <button>
            Show
        </button>
      </form>
    </div>
  );
}

export default PersonalInfo;
