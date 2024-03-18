//FOREACH
/* const forEach = function (callbackFn = (item, index, array) => { }) {
  for (let i = 0; i < this.length; i++) {
    callbackFn(this[i], i, this);
  }
}

Array.prototype.forEach = forEach;

// Tuo codice
const fruits = ["Mela", "Banana", "Kiwi", "Fragola"];

function forEachFruit(array) {
  array.forEach(function (element) {
    console.log(element + "//");
  });
}

forEachFruit(fruits); */

//MAP

const map = function (callbackFn = (item, index, array) => { }) {
  const array = [];
  for (let i = 0; i < this.length; i++) {
    const result = callbackFn(this[i], i, this);
    array.push(result)
  }
  return array;
}

Array.prototype.map = map;

const fruits = ["Mela", "Banana", "Kiwi", "Fragola"];

const newArray = fruits.map((fruit) => {
  if (fruit != "Banana") {
    return ({ name: fruit })
  } else{
    return "it is a banana"
  }
})

console.log(newArray);