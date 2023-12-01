// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]git

//P: Is it allows going to be integers? Are we going to be given any special characters? An empty arr ever?
//R: Return a new arr with each value doubled
//E: if we are given [2,3,4], should return [4,6,8]
//   if we are given [4,5,6], should return [8,10,12]
//   if we are given [2,22], should return [4,44]
//P:
//Make a function that takes in an array
function doubled(arr) {
  if (arr.length === 0 || arr === undefined) {
    console.log("Array is undefined");
  } else {
    return arr.map((e) => e * 2);
  }
}
//map through array and multiply each element by 2.  also return lol
doubled([1, 2, 3]);
console.log(doubled([2, 3, 4]), [4, 6, 8]);
console.log(doubled([]));
