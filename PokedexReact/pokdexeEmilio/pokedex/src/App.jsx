import Pokedex from "./Pokedex"
import Pokedex2 from "./ProvaPOkedex"

const App = () => {
  return (
    <>
      <h1>ciao</h1>
      <Pokedex />
      <h1>secondo pokedex con use effect per renderizare i dati ottenuti</h1>
      <Pokedex2 />
    </>
  )
}

export default App