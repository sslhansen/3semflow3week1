import { useState, useEffect } from "react";

const URL = "https://api.chucknorris.io/jokes/random";
const URL2 = "https://icanhazdadjoke.com/";

export function Chucknorris(props) {
  const [joke, setJoke] = useState();
  function fetchJoke() {
    fetch(URL, { headers: { Accept: "application/json" } })
      .then((response) => response.json())
      .then((data) => setJoke(data.value));
  }
  return (
    <div>
      <button onClick={fetchJoke}>Get chucknorris:</button>
      <p>{joke}</p>
    </div>
  );
}

export function Dadjoke(props) {
  const [joke, setJoke] = useState();
  useEffect(() => {
    const interval = setInterval(() => {
      fetch(URL2, { headers: { Accept: "application/json" } })
        .then((response) => response.json())
        .then((data) => setJoke(data.joke));
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <h2>{joke}</h2>
    </div>
  );
}
