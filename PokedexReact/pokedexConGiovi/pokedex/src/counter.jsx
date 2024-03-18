import React, { useState } from "react";


const Contatore = () => {
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(1)

    const handlePlus = () => {
        setCount(count + +number)
    };

    const handleSelectNumber = (event) => {
        setNumber(event.target.value)
    }



    return (
        <>
            <div>contatore numero : {count} </div>
            <div><select value={number} onChange={handleSelectNumber}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select></div>
            <button onClick={handlePlus}> aggiungi {number}</button>
        </>
    )

}

export default Contatore