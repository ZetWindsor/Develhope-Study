import { useEffect, useState } from "react"
import { Constants } from "./Constants";

const Pokedex = () => {
    const [pokemonName, setPokemonName] = useState("");
    const [pokemonData, setPokemonData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (pokemonData) {
            console.log(pokemonData);
        }
    }, [pokemonData]
    )

    const handleSearch = async () => {
        try {
            if (pokemonName === "") {
                setError("inserire nome valido")
                return
            }
            const response = await fetch(Constants(pokemonName).API_BASE)
            const result = await response.json()
            if (response.ok) {
                setPokemonData(result)
                setError(null)
            }

        } catch (error) {
            setError('pokemon errato e scritto male')
            setPokemonData(null)
        }
    }



    return (
        <>
            <input type="text" value={pokemonName} onChange={(event) => setPokemonName(event.target.value)} />
            <button onClick={handleSearch}>search</button>
            {error && <h1>{error}</h1>}
            {pokemonData && <div>
                <h1>nome: {pokemonData.name}</h1>
                <img src={pokemonData.sprites.front_default} alt="" />
                <h2>numero pokedex : {pokemonData.id}</h2>
                <h2>tipo : {pokemonData.types.map((type) => type.type.name).join(" - ")}</h2>

            </div>}

        </>
    )
}

export default Pokedex