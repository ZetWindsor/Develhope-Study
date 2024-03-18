import React, { useState, useEffect } from 'react';

function CounterComponent() {
    const initialValue = 0
  const [count, setCount] = useState(initialValue);

  // useEffect che viene eseguito ogni volta che 'count' viene modificato
  useEffect(() => {
    console.log(`Il valore di count è: ${count}`);
  }, [count]); // 'count' è la dipendenza, l'effetto viene eseguito ogni volta che 'count' cambia

  const handleButtonClick = () => {
    setCount(prevCount => prevCount + 1);
  };
  const handleButtonClickMinum = () => {
    setCount(prevCount => prevCount - 1);
  };

  const handleButtonReset = () =>{
    setCount(initialValue)
  }

  return (
    <div>
      <h2 className="text-3xl font-bold underline">Contatore: {count}</h2>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
       onClick={handleButtonClick}>Aumenta</button>
      <button onClick={handleButtonClickMinum}>dimin</button>
      <button onClick={handleButtonReset}>reset</button>
    </div>
  );
}

export default CounterComponent;
