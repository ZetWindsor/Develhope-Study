import { useState } from "react";
import { Constants } from "./constants";
import { useAxios } from "./hooks/useAxios";
import CardLine from "./components/CardLines";

function App() {
  const [pippo, setPippo] = useState("14");

  const { data: lines, error } = useAxios(Constants(pippo).API_URL);

  if (error) {
    return (
      <h1>{error}</h1>
    );
  }

  const handlePippoChange = (event) => {
    setPippo(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <select value={pippo} onChange={handlePippoChange} className="mb-4 p-2 border border-gray-300 rounded">
        <option value="12">12</option>
        <option value="14">14</option>
        <option value="16">16</option>
        <option value="18">18</option>
        <option value="20">20</option>
      </select>

      {lines && lines.length > 0 && lines.map((line) => (
        <CardLine key={line.id} data={line} />
      ))}
    </div>
  );
}

export default App;
