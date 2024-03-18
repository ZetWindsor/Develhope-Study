import { useState, useEffect } from "react";

const Pokedex2 = () => {
    const [pokemonName, setPokemonName] = useState("");
    const [pokemonData, setPokemonData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (pokemonData) {
            console.log("Pokemon Data:", pokemonData);
        }
    }, [pokemonData]);

    const handleSearchPokemon = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            const result = await response.json();

            if (response.ok) {
                setPokemonData(result);
                setError(null);
            }

            if (pokemonName === "") {
                setError(`inserire nome pokemon`);
                return;
            }
            
        } catch (error) {
            setError(`non esiste o scritto male`);
            setPokemonData(null);
        }
    };

    return (
        <>
            <input type="text" value={pokemonName} onChange={(event) => setPokemonName(event.target.value)} />
            <button onClick={handleSearchPokemon}>cerca</button>
            {error && <h1>{error}</h1>}
            {pokemonData && (
                <div>
                    <h1>nome : {pokemonData.name}</h1>
                    <h1>numero pokedex: {pokemonData.id}</h1>
                    <img src={pokemonData.sprites.front_default} alt="" />
                    <h1>tipo : {pokemonData.types.map((type) => type.type.name).join(" - ")}</h1>
                </div>
            )}
        </>
    );
};

export default Pokedex2;
