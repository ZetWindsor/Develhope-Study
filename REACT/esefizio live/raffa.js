array = [1, 5, 6, 7]
num = [2]

function raffa(array) {
  if (num % 2 === 0) {
    return array.concat(num)
  }

  else {
    return "non sono un numero"
  }

}

console.log(raffa(array).sort());