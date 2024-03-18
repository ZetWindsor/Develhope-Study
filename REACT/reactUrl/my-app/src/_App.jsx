import { useState } from "react"
import SpanCounter from "./components/SpanCounter";
import DivCounter from "./components/DivCounter";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(1);
  const [operationMode, setOperationMode] = useState("ADD");
  const [container, setContainer] = useState("SPAN");


  const handleClick  = () => {
    setCounter((counter) => {
      if (operationMode === "ADD") {
        return counter += number;
      } else if(operationMode === "REMOVE") {
        return counter -= number;
      }
    });
  }

  const handleSelect = (event) => {
    const value = event.target.value;
    setOperationMode(value);
  }

  const handleInput = (event) => {
    const value = Number(event.target.value);
    setNumber(value);
  }

  const handleSelectContainer = (event) => {
    const value = event.target.value;
    setContainer(value);
  }

  return (
    <>
      <div>
        <select value={container} onChange={handleSelectContainer}>
          <option value="SPAN">SPAN</option>
          <option value="DIV">DIV</option>
        </select>
        <select value={operationMode} onChange={handleSelect}>
          <option value="ADD">ADD</option>
          <option value="REMOVE">REMOVE</option>
        </select>
        <input type="number" value={number} onInput={handleInput}/>
        <button onClick={handleClick}>ADD</button>
        <div>
          {
            container === "SPAN" ?
            <SpanCounter counter={counter}/>
            :
            <DivCounter counter={counter}/>
          }
        </div>
      </div> 
    </>
  )
}

export default App
