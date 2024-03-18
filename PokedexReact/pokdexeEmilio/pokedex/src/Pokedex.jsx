import { useState } from "react"
import classes from "./pokedex.module.scss"

const Pokedex = () => {
    const [pokemon, setPokemon] = useState('');
    const [pokemonData, setPokemonData] = useState(null)
    const [error, setError] = useState(null)

    const handleSearch = async () => {
        try {
            if (
                pokemon === "") {
                setError("inserisci un pokemon")
                return

            }

            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            const data = await response.json()
            if (response.ok) {
                setPokemonData(data)
                setError(null)
                console.log(pokemonData);
            }

        } catch (error) {
            setError("non esiste o scritto male o incompleto")
            setPokemonData(null)
        }


    }

    return (

        <>
            <input type="text" value={pokemon} onChange={(event) => setPokemon(event.target.value)} />
            <button onClick={handleSearch}>cerca</button>
            {error && <p>{error}</p>}
            {pokemonData && (
                <div>
                    <h1>Nome : {pokemonData.name}</h1>
                    <img src={pokemonData.sprites.front_default} alt="" />
                    <h1 className={pokemonData.id <= 151 ? classes.kanto : classes.notKanto}>Numero Pokedex : {pokemonData.id}</h1>
                    <h1>Tipo : {pokemonData.types.map((type) => type.type.name).join(" - ")}</h1>


                </div>
            )}

        </>
    )
}

export default Pokedex