//Crea una copia dell'oggetto "persona" in un nuovo oggetto "personaCopia" e stampa entrambi gli oggetti in console.


const persona = {
  nome: "Mario",
  eta: 30,
};

const personacopia = Object.assign({}, persona)

personacopia.nome= "michele" // da scrivere il nuovo paramaetro per la copia



console.log("Persona originale:", persona);
console.log(' Persona copia', personacopia)