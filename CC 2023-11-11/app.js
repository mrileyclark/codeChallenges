Fake Binary 11.11.23
// function fakeBin(x){
//   let str = '5, 3, 19, 21, 2, 5, 8, 8';
//   let result = str.split(",");
//   return result.map(x => x < 5 ? '0' : '1').toString().split(',').join('');
// }

// console.log(fakeBin());



// function fakeBin(x){
//   let str = '5, 3, 19, 21, 2, 5, 8, 8';
//   let result = str.split(",");
//   return result.map(x => x < 5 ? 0 : 1).join('');
// }

// console.log(fakeBin());


// options that worked for this kyu--why does mine not work

// function fakeBin(x) {
//     return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }

// function fakeBin(x){
//   return x.split('').map(a => a < '5' ? "0" : "1").join("");
// }