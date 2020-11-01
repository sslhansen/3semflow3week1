import React from "react";
import {persons} from "./file2";
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function MultiWelcome() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edith" />
      <WelcomePerson person={persons[0]}/>
      {persons.map(x=><WelcomePerson person={persons[persons.indexOf(x)]}/>)}
    </div>
  );
}

function WelcomePerson(props) {
    console.log(props.person)
    const personv2 = {...props.person}
  return <p>Hello, {personv2.firstName} {personv2.lastName} {personv2.gender}
  {personv2.email}{personv2.phone}</p>;
}

export default MultiWelcome;
