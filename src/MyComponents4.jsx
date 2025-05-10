import React, { useState } from 'react';

function MyComponents4() {
  const [car, setCar] = useState({
    year: 2024,
    make: 'Porsche',
    model: 'Panamera',
  });

  function handleYearChange(event) {
    setCar((c) => ({ ...c, year: event.target.value }));
  }
  function handleMakeChange(event) {
    setCar((c) => ({ ...c, make: event.target.value }));
  }
  function handleModelChange(event) {
    setCar((c) => ({ ...c, model: event.target.value }));
  }

  return (
    <div>
        <input type="number" value={car.year} onChange={handleYearChange}/><br/>
        <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
        <input type="text" value={car.model} onChange={handleModelChange}/><br/>


      <p>
        You favorite car: {car.year} {car.make} {car.model}
      </p>
    </div>
  );
}
export default MyComponents4;
