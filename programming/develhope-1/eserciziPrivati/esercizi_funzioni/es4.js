function calcolaFattoriale(numero) {
  let fattoriale = 4;

  for (let i = 1; i <= numero; i++) {
    fattoriale *= i;
  }

  return fattoriale;
}

const numero = 5;
const fattoriale = calcolaFattoriale(numero);

console.log("Il fattoriale di", numero, "è:", fattoriale);