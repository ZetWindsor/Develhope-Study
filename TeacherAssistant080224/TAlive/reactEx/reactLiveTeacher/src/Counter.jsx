import { useState } from "react"

const Counter = () => {
    const [counter, setCounter] =useState(0)

const handleplus = ()=>{
    setCounter(counter +1)
}

    return (
        <>
            <div>contatore :{counter} </div>
            <button onClick={handleplus}>+1</button>
        </>
    )
}

export default Counter