// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
// The returned value must be a string, and have "***" between each of its letters.
// You should not remove or add elements from/to the array.

// Parameters: an array of strings (case-sensitive)
// Returns: first value of sorted array with '***' between each letter
// Examples: ['this', 'is', 'an', 'example'] => 'a***n'
// Pseudocode:

// function that takes in an array

// sort alphabetically

// remove first string

// split string into individual strings

// rejoin individual strings with '***' between them

// // function that takes in an array
// function twoSort(s){
//     return s
//     // sort alphabetically
//     .sort()
//     // remove first string
//     .shift()
//     // split string into individual strings
//     .split('')
//     // rejoin individual strings with '***' between them
//     .join('***')
// }

//  console.log(twoSort(['hello', 'day', 'actor', 'test']))

// refactored

function twoSort(s) {
  return s.sort()[0].split("").join("***");
}
