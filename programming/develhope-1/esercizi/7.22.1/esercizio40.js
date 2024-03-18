let user = {
  name: "Cosimo",
  age: 30,
};

/* let newUser = user;

newUser.name = "Paolo";

console.log(newUser);
console.log(user);
 */




let newUser  = Object.assign({}, user);

newUser.name = "Michele";
newUser.age = 60

console.log(user);
console.log(newUser)