import { useState, useEffect } from "react";

function Ex1(props) {
  const [count, setCount] = useState(props.startNumber);
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount(count + props.amount)}>
        count chosen value +
      </button>
      <button onClick={() => setCount(count - props.amount)}>
        count chosen value -
      </button>
      <p>{count}</p>
    </div>
  );
}

export default Ex1;
