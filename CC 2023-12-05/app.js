12.5;

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

// ARRAYS FUNDAMENTALS

var number = function (array) {
  let n = Number();
  if (array != []) {
    for (let i = 0; i < array.length; i++) {
      let prefix = `${i + 1}: `;
      array[i] = prefix + array[i];
      n++;
    }
    return array;
  }
  return array;
};
