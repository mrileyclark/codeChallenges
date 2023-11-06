// 11.05.23

// A Needle in the Haystack

function findNeedle(haystack) {
  let result = haystack.findIndex((item) => item == "needle"); // 5
  return `found the needle at position ${result}`;
}
