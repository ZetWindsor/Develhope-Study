//const array = ["gatto", "cane", "elefante", "uccello", "leone"];
//
//const parolelunghe = array.filter(animale =>animale.length>5)
//
//console.log(parolelunghe);


//function numeriDispari(array) {
//  const dispari = []
//  for (i = 0; i < array.length; i++) {
//    if (array[i] % 2 !== 0)
//    dispari.push(array[i])
//
//  }
//      return dispari
//
//}
//
//const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//
//
//console.log(numeriDispari(numeri));


const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const numeriDispari = (array) => {
  return array.filter(numero=>numero % 2 ===0)
}

console.log(numeriDispari(numeri));