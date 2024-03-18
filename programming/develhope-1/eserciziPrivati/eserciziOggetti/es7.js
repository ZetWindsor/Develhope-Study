//Verifica se l'oggetto "persona" ha la proprietà "sesso" e stampa un messaggio appropriato in console.


const persona = {
  nome: "Mario",
  eta: 30,
  sesso: "maschio"
};

// delete persona.sesso

if ("sesso" in persona) {
  console.log("la persona ha un sesso");
}
else{ console.log(" devi aggiunger il sesso");}
