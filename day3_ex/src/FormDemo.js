import React, {useState} from "react";
const NameForm = () => {
  const [name,setName] = useState("");


  function handleChange (event) {
    const target = event.target
    const value = target.value
    setName(value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    alert('handled')
  }
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input id="namen" type="text" value={name} onChange={handleChange}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
      {name}
    </div>
  );
};
 
export function FormDemo() {
  return (
    <div style={{marginTop:25}}>
      <NameForm />
    </div>
  );
}
 