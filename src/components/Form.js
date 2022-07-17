import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
const [newsLetter,setNewsLetter]=useState(false)

function handleFirstNameChange(event){
  setFirstName(event,target,value)
}
function handleLastNameChange(event){
  setLastName(event,target,value)
}
function handleNewsLetterChange(event){
  setNewsLetter(event,target,value)
}

  return (
    <form>
      <label htmlFor="newsLetter">Subscribe to our Newsletter?</label>
      <input type="text" onChange={handleFirstNameChange}value={firstName} />
      <input type="text" onChange={handleLastNameChange}value={lastName} />
      <input type={checkedbox} id="newsLetter" onChange={handleNewsletterChange}
      
        checked={newsLetter} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
