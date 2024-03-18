function canPlay() {
  let sport = " Football";

  if (true) {
    this.personName = "Cosimo";
  }

  console.log(this.personName + sport);
}

canPlay();


/* all interno di if ho creato si un alra variabile, ma è come se nascesse e moriss all
interno del blocco if, quindi non devo creare una varianile "let", ma devo 
creare.....diciamo una variabile this. che dice si è all interno di quel blocco
ma mettandola anche al di fuori possa essere "rintracciata" e renderla
disponivbile per le altre funzioni al difuori del blocco di nascita */