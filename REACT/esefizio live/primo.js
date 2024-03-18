//Somma di tutti gli elementi: Dato un array di numeri, scrivi una funzione che calcoli la somma di tutti gli elementi.

array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]



function somma(array) {
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum
}


console.log(somma(array));