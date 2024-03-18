import { useState, useEffect } from "react"
import { Constants } from "./Constants";

const Pokedex = () => {
    const [pokemonName, setPokemonName] = useState("");
    const [pokemonData, setPokemonData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (pokemonData) {
            console.log('il nome del pokemon caricato e', pokemonData)
        };
    }, [pokemonData]);

    const handleConsolePokemonList = async () => {
        try {
            let allResults = [];
            let nextUrl = 'https://pokeapi.co/api/v2/pokemon/';

            while (nextUrl) {
                const response = await fetch(nextUrl);
                const result = await response.json();

                if (response.ok) {
                    allResults = [...allResults, ...result.results];
                    nextUrl = result.next;
                } else {
                    throw new Error('Failed to fetch Pokemon data');
                }
            }

            console.log(allResults);
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    const handlePokemonName = (event) => {
        setPokemonName(event.target.value)
    }

    const handleSearch = async () => {
        try {
            if (pokemonName === "") {
                setError(`inserire nome`);
                return;
            }
            const response = await fetch(Constants(pokemonName).API_BASE);
            const result = await response.json();
            if (response.ok) {
                setPokemonData(result);
                setError(null);
                console.log(pokemonData);
            }

        } catch (error) {
            setError('nome del pokemon errato o non esistente');
            setPokemonData(null);
        }
    };

    return (
        <>
            <input type="text" value={pokemonName} onChange={handlePokemonName} />
            <button onClick={handleSearch}>Search</button>
            {error && <h1>{error}</h1>}
            {pokemonData && <div>
                <h1>Nome: {pokemonData.name}</h1>
                <h1>numero pokedex : {pokemonData.id}</h1>
                <img src={pokemonData.sprites.front_default} alt="" />
                <h1>tipo:{pokemonData.types.map((pippo) => pippo.type.name).join(" - ")}</h1>
            </div>}
            <br />
            {<button onClick={handleConsolePokemonList}>mostra pokemon in console</button>}
        </>
    )

}

export default Pokedex