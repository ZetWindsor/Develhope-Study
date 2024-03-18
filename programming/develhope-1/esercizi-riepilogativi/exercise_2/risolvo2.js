let n = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,]
function trovaNumeriPrimi(n) {
  let numeriPrimi = [];

  // Ciclo da 2 a n
  for (let i = 0; i < n.length; i++) {
    let isPrimo = true;
      if (n[i]===1 || n[i]===0){
        isPrimo=false
      }
      
      else{

     
    // Verifica se i è un numero primo
    for (let j = 2; j < n[i]; j++) {
      if (n[i] % j === 0) {
        isPrimo = false;
        break;
      }
    }
 }
    // Se i è un numero primo, lo aggiungiamo all'array
    if (isPrimo) {
      numeriPrimi.push(n[i]);
    }
  }

  return numeriPrimi;
}


console.log(trovaNumeriPrimi(n).join("-"));