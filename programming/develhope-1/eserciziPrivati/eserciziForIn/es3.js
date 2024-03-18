//Scrivi un programma che confronti le proprietà di due oggetti e stampi sulla console se le proprietà corrispondenti hanno lo stesso valore.


const oggetto1 = {
  nome: "Mario",
  età: 30,
  professione: "Ingegnere",
};

const oggetto2 = {
  nome: "Luigi",
  età: 30,
  professione: "Architetto",
};


for ( let key in oggetto1){

  if ( oggetto1[key] === oggetto2[key]){

    console.log( key +  " valori uguali") 
  }
  else( console.log( key + "valori diversi"))
}
 