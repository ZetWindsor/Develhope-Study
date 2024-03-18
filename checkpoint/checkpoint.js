function countEvenNumbers(nums) {
  //  let count = 0
  //  for (let i = 0; i < nums.length; i++) {
  //
  //    if (nums[i] % 2 !== 0) {
  //      count++
  //    }
  //
  //  }
  //  return count
  //
  return nums.filter((n) => n % 2 === 0).length

}

console.log(countEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 87, 88, 99]));