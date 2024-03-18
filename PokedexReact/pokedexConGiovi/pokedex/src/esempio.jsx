import React, { useState, useEffect } from 'react';

function ExampleComponent() {
    const [count, setCount] = useState(0);

    // useEffect viene utilizzato per eseguire azioni in risposta a cambiamenti nel componente
    useEffect(() => {
        // Questa funzione sarà eseguita dopo ogni render del componente
        document.title = `Conteggio: ${count}`;

        // Pulizia (cleanup) dell'effetto se necessario
        return () => {
            // Ad esempio, potrebbe essere un'azione da eseguire quando il componente viene "smontato"
            console.log('Componente smontato');
        };
    }, [count]); // La dipendenza [count] indica quando l'effetto dovrebbe essere eseguito

    return (
        <div>
            <p>Conteggio: {count}</p>
            <button onClick={() => setCount(count + 1)}>Aumenta Conteggio</button>
        </div>
    );
}

export default ExampleComponent;
