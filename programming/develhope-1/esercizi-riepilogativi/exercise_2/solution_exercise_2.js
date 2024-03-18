const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function primeNumbers(arr) {
  let primesArr = [];
  for (let i = 0; i < arr.length; i++) {
    let isPrime = true;
    if (arr[i] === 1) {
      isPrime = false;
    } else {
      for (let j = 2; j < arr[i]; j++) {
        if (arr[i] % j === 0) {
          isPrime = false;
          break;
        }
      }
    }
    if (isPrime) {
      primesArr.push(arr[i]);
    }
  }
  return primesArr;
}


console.log(primeNumbers(numbers));