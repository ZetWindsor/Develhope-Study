//Scrivi un programma che stampi sulla console tutte le proprietà di un oggetto.
const persona = {
  nome: "Mario",
  cognome: "Rossi",
  età: 30,
  professione: "Ingegnere",
};


for( const proprietà in persona){
  console.log(proprietà + " : " + persona[proprietà]);
}