const students = [
  { id: 1, name: "Luca", surname: "Rossi", age: 20, hobby: 'gamer' },
  { id: 2, name: "Mario", surname: "Bianchi", age: 24, hobby: 'sportsman' },
  { id: 5, name: "Elena", surname: "Pappalardo", age: 23, hobby: 'photographer'},
  { id: 3, name: "Giovanna", surname: "Brambilla", age: 26, hobby: 'gamer' },
  { id: 4, name: "Carmelo", surname: "Verdi", age: 18, hobby: 'photographer' },
];


let studentePiuGiovane = students[0]

let cognomePiuLungo = students[0]

function checkAge(student){
if (student.age < studentePiuGiovane.age){
  studentePiuGiovane = student}
}

function checkSurname(student) {
  if( student.surname.length > cognomePiuLungo.surname.length){
    cognomePiuLungo = student
  }
}
 function motto(){
  
  
  for(i = 0; i<students.length; i++){
  console.log(students[i].name);


  switch(students[i].hobby){
  case 'gamer':
    console.log("life is a game, play to win");
    break;

    case 'sportsman':
      console.log("Never give up!");
      break

case "photographer":
  console.log("A picture is worth a thousand words!");
  break


    default:
      console.log("studente non trovato");
      break
}
checkAge(students[i])
checkSurname(students[i])
}

console.log("il piu giovae e " + studentePiuGiovane.name);
console.log( 'il cognome piu lungo appartiene a '+ cognomePiuLungo.surname)

}

motto()




