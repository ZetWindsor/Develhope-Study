let frutta = [
  {
    nome: "mela",
    prezzo: 5
  },
  {
    nome: "arancia",
    prezzo: 2
  },
  {
    nome: "banana",
    prezzo: 3
  },
  {
    nome: "kiwi",
    prezzo: 7
  },
  {
    nome: "pera",
    prezzo: 3
  },
  {
    nome: "uva",
    prezzo: 1
  },
  {
    nome: "limone",
    prezzo: 0.3
  },
]


function oridne(listaFrutta) {
  listaFrutta.sort(function(a,b)
  {
  return a.prezzo - b.prezzo;
});}


oridne(frutta)

console.log(frutta);