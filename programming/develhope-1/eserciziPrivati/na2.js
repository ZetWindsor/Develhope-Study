function trovaNumeroMinimo(numero1, numero2, numero3) {
  var minimo = numero1;
  
  if (numero2 < minimo) {
      minimo = numero2;
  }
  
  if (numero3 < minimo) {
      minimo = numero3;
  }
  
  return minimo;
}


var minimo = trovaNumeroMinimo(2, 3, 6);
console.log("Il numero più piccolo è:", minimo);