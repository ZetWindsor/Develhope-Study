//Filtro delle stringhe lunghe: Dato un array di stringhe, scrivi una funzione che filtri le stringhe più lunghe di una lunghezza specifica.

array = ["ciao", "pizza", "michele", "cavallo", "cina"]

//const lunghe = array.map(piuLungheDi5)
//
//function piuLungheDi5(valore){
//  return valore.length >=5;
//}
//
//console.log(lunghe);


const lunghe = array.filter(array=> array.length >=5)

console.log(lunghe);