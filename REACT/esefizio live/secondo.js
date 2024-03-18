//Moltiplicazione degli elementi pari: Dato un array di numeri, scrivi una funzione che calcoli il prodotto di tutti gli elementi pari.


array = [1, 2, 3, 4, 5, 6]


function moltiplicazioneNumeriPari(array) {
  let prodotto = 1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      prodotto *= array[i]
    }

  }
  return prodotto
}


console.log(moltiplicazioneNumeriPari(array));