import { useState, useEffect } from "react";

export function Pokedex() {
  const [pokemon, setPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState(null);
  const [add, setAdd] = useState(0)

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      const data = await response.json();

      if (response.ok) {
        setPokemonData(data);
      }

    } catch (error) {
      setError("Questo Pokemon non esiste!");
    }
  };

  const aumenta = () => {
    setAdd(add + 1)
  }

  useEffect(() => {
    // Only trigger the API call when the component mounts or when 'pokemon' changes
    if (pokemon) {
      handleSearch();
    }

  }, [pokemon]); // Dependency array to ensure useEffect runs when 'pokemon' changes

  return (
    <>
      <input type="text" value={pokemon} onChange={(event) => setPokemon(event.target.value)} />
      <button onClick={() => setPokemonData(null)}>Clear</button>
      <button onClick={handleSearch}>Search infos!</button>

      {error && <p>{error}</p>}
      {pokemonData && (
        <div>
          <h1>Nome: {pokemonData.name}</h1>
          <p>Numero Pokedex: {pokemonData.id}</p>
          <img src={pokemonData.sprites.front_default} alt="Sprite Pokemon" />
          <img src={pokemonData.sprites.back_default} alt="Sprite Pokemon" />
          <p>Esperienza di base: {pokemonData.base_experience}</p>
          <p>Abilità: {pokemonData.abilities.map((ability) => ability.ability.name).join(", ")}</p>
          <p>Mosse: {pokemonData.moves.map((move) => move.move.name).join(", ")}</p>
        </div>


      )}

      <div>
        <p>Il mio numero: {add}</p>
        <button onClick={aumenta}>Aumenta</button>
      </div>
    </>
  );
}
