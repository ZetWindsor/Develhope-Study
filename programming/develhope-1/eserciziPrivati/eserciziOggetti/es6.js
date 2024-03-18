//Itera sulle proprietà di un oggetto "persona" e stampa ogni chiave e valore corrispondente in console.


const persona = {
  nome: "Mario",
  eta: 30,
  sesso: "maschio"
};


for ( let key  in persona){ 

  console.log( key + " : " + persona[key] )};