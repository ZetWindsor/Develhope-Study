import { useEffect, useState } from "react"

const Pokedex = () => {

    const [pokemonName, setPokemonName] = useState('')
    const [pokemonData, setPokemonData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {  // mi deve varivare i dati ottenuti al caricamento di questo componente
        if (pokemonData)
            console.log('nome pokemon caricato', pokemonData);
    }, [pokemonData])

    const handleSearch = async () => {
        try {
            if (pokemonName === "") {
                setPokemonData(null)
                setError('inserire un nome')
                return //metto il return perche' senno va avanti e ceca nell array e poi crasha
            }

            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)  // la variabile qui per renderlo dinamico e cercare il pokemon specifico
            const result = await response.json();
            if (response.ok) {
                setPokemonData(result)
                setError(null)
            }

        } catch (error) {
            setError('pokemon scritto male o non essite')
            setPokemonData(null)
        }
    }

    const handlePokemonName = (event) => {
        setPokemonName(event.target.value)  //perche il valore deve cambiare quando avviene un evento che targhettizza il valore
    }

    return (
        <>
            <input type="text" value={pokemonName} onChange={handlePokemonName} />
            <button onClick={handleSearch}>search</button>
            {error && <h1>{error}</h1>}

            {pokemonData && <div>
                <h1>nome:{pokemonData.name}</h1>
                <h1>numero :{pokemonData.id}</h1>
                <h1>altezza:{pokemonData.height}</h1>
                <img src={pokemonData.sprites.front_default} alt="sprite" />
                <h1>tipo: {pokemonData.types.map((tipo) => tipo.type.name).join(' - ')}</h1>  {/* il map per ottnere piu dati se ce ne fossero piu di 1 */}
            </div>}


        </>
    )
}

export default Pokedex
// ricorda che devi fare l export senno non lo puoi caricare in altri file