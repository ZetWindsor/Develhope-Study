//Scrivi un programma che calcoli la somma dei valori delle proprietà numeriche di un oggetto.

const spese = {
  cibo: 50,
  trasporti: 30,
  affitto: 500,
  utenze: 100,
};


totspese = 0

for( let key in spese){

  if (typeof spese[key] === "number"){
    totspese += spese[key]
  }
}


console.log( totspese)