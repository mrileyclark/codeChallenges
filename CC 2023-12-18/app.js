// *************12/18/23

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  let arr = str.split(" ");
  let reversed = arr.map((el) => {
    return el.split("").reverse().join("");
  });
  return reversed.join(" ");
}

// console.log(reverseWords('double  spaces'));
