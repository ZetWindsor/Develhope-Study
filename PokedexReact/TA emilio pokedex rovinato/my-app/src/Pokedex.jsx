import { useState } from "react";

export function Pokedex() {
    const [pokemon, setPokemon] = useState("")
    const [pokemonData, setPokemonData] = useState(null)
    const [error, setError] = useState(null)

    const handleSerch = async () => {
        try {
            if (pokemon === "") {
                setError("Inserisci un nome di Pokémon");
                return;
            }

            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
            const data = await response.json();

            if (response.ok) {
                setPokemonData(data);
                setError(null); // Pulisci l'errore in caso di successo
                console.log(pokemonData);
            }

            if (pokemon === "") {
                setPokemonData(null); // Pulisci i dati in caso di input vuoto
                setError("Inserire un nome di Pokémon");
            }
        } catch (error) {
            setError('Non esiste o è scritto male');
            setPokemonData(null); // Pulisci i dati in caso di errore
        }
    }


    return (
        <>
            <input type="text" value={pokemon} onChange={(event) => setPokemon(event.target.value)} className="" />
            <button onClick={handleSerch}>gotta catch'em all</button>

            {error && <p>{error}</p>}
            {pokemonData &&
                (<div>
                    <h1>Nome : {pokemonData.name}</h1>
                    <img src={pokemonData.sprites.front_default} alt="sprite" />
                    <img src={pokemonData.sprites.front_shiny} alt="sprite" />
                    <h2 className={pokemonData.id <151 ? classes.kantp : classes.notKanto}>numero pokedex : {pokemonData.id} </h2>
                    <h2>tipo: {pokemonData.types.map((tipo) =>tipo.type.name).join(' - ')}</h2>
                </div>)}

        </>
    )
}