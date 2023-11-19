// 11.18.23  Convert # to reversed array of digits

function digitize(n) {
  return n.toString().split("").map(Number).reverse();
}
