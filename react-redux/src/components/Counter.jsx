import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>Counter App</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>INCREMENT</button>
    </>
  );
};

export default Counter;
