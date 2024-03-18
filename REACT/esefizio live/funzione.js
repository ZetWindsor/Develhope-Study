//fare un funzione che se da una stringa con caratteri pari dia cosi come è se dispari deve dare la parola al contraio


//function reverseIfOd(text){
// for (let i = 0; i < text.length; i++) {
//const element = text[i];
//  }
//if (element.length coefficente di 2 > 0)
//return text}
//else { return }


let text = "ciaoa"


function reverseIfOd(text) {
  if (text.length % 2 === 0) {
    return text
  }
  else {
    return text.split("").reverse().join("")
  }
}

console.log(reverseIfOd(text));