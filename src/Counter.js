import React, { useState } from "react";

function Counter() {
  // Declares a new state variable, which we will call "count"
  // Declares a setCount function that allows you to modify the count value
  const [count, setCount] = useState(0);
  const [startNumber, setStartNumber] = useState();

  const display = (e) => {
    e.preventDefault();
    setCount(startNumber);
  };

  return (
    <div>
      <h1>Bienvenue sur Netlify !</h1>
      <input
        placeholder="Add a start value"
        type="number"
        value={startNumber}
        onChange={(e) => setStartNumber(e.target.value)}
      />
      <button type="submit" onClick={display}>
        Set the start number
      </button>
      <p>The counter is at : {count} </p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
}

export default Counter;
