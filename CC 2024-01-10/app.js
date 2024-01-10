//   I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

//   function arrayPlusArray(arr1, arr2) {
//       // return a new array with the same length as the shorter array
//   return array1.length < array2.length
//     ? array1.map((num, idx) => num + array2[idx])
//     : array2.map((num, idx) => num + array1[idx]);
// }

function arrayPlusArray(arr1, arr2) {
  return arr1.reduce((a, b) => a + b, 0) + arr2.reduce((a, b) => a + b, 0);
}
