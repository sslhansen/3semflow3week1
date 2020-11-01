import "./App.css";
import Ex1 from "./file1.js";
import {Chucknorris, Dadjoke} from "./file2.js";
import Ex3 from "./file3";

function App() {
  return (
    <div className="App">
      <Ex1 startNumber={parseInt(localStorage.getItem("count"))} amount={1000000}/>
      <Chucknorris/>
      <Dadjoke/>
      <Ex3/>
    </div>
  );
}

export default App;
