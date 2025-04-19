import React, { useState } from 'react';

function MyComponents() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleDecreasment = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="counter">
      <p>
        Count: <strong>{count}</strong>
      </p>
      <button onClick={handleIncrement}>Increase</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecreasment}>Decrease</button>
    </div>
  );
}
export default MyComponents;
