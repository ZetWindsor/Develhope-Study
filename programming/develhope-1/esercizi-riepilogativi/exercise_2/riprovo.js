let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,18,19,20]

function trovaNumeriPrimi(n) {
  let arrayPrimi = []
  for (i = 0; i < n.length; i++) {
     isPrimo = true
    if (n[i] === 0 || n[i] === 1) {
      isPrimo=false  
    }
    else {
      for (j = 2; j < n[i]; j++) {
        if (n[i] % j === 0) {
          isPrimo = false
        }
      }
      if (isPrimo) {
        arrayPrimi.push(n[i])
      }
    }
  }
  return arrayPrimi
}
console.log(trovaNumeriPrimi(number))