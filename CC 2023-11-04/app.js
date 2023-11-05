// 11.04.23

// How good are you really?

function betterThanAverage(classPoints, yourPoints) {
  //set sum to 0
  let sum = 0;

  //loops thru classPoints and totals
  for (let i = 0; i < classPoints.length; i++) {
    sum += classPoints[i];
  }

  //gets average and compares 2 scores
  let classAverage = sum / classPoints.length;
  return yourPoints > classAverage;
}
