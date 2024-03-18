let user = {
  name: "Cosimo",
  age: 30,
};

let newUser = {};


for( const valore in user){

  newUser[valore] = user[valore]
}

newUser["name"] = "Paolo";

console.log(newUser);
console.log(user);
