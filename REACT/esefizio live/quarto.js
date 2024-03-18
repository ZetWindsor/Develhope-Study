//Trova il numero maggiore: Dato un array di numeri, scrivi una funzione che trovi il numero più grande nell'array.

array = [0, 1, 2, 3, 4, 5, 6, 5, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 28787]


//function greaternumber(array) {
//
//  let numeroMaggiore = array[0];
//
//  for (i = 0; i < array.length; i++){
//    if(array[i]>numeroMaggiore){
//      numeroMaggiore=array[i]
//    }
//  }
//  return numeroMaggiore
//
//  
//}
//
//
//console.log(greaternumber(array));


const nums = array.filter((value, index, giorgio) => {
  return giorgio.indexOf(value) !== index
})

console.log(nums);