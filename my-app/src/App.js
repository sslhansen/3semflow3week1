import "./App.css";
import upper, { text1, text2, text3 } from "./file1";
import person, { persons } from "./file2";
import { males, females } from "./file2";
import MultiWelcome from "./file3";

function App() {
  return (
    <div className="App">
      {/*       {Ex2Run()} */}
      {Ex3Run()}
    </div>
  );
}

function Ex3Run() {
  return (
    <div>
      <h2>
        <MultiWelcome />
      </h2>
    </div>
  );
}

function Ex2Run() {
  return (
    <div>
      <h2>{text1}</h2>
      <h2>{text2}</h2>
      <h2>{text3}</h2>
      <p>{upper("please uppercase me")}</p>
      <h2>{person.firstName}</h2>
      <h2>{Ex2(person)}</h2>
      <h2>{Ex2(males)}</h2>
      <h2>{Ex2(females)}</h2>
    </div>
  );
}

function Ex2(props) {
  const { firstName, email } = props;
  const people1 = [
    ...males,
    ...females,
  ]; /*   console.log(people1)
  console.log(people2) */
  /*   const people2 = [...males, "Kurt", "Janne", ...females, "Tina"]
   */ const personV2 = { ...props, people1 };
  console.log(personV2);
  return (
    <p>
      {firstName} {email}
    </p>
  );
}

export default App;
