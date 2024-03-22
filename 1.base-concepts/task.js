"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  if (discriminant >= 0) {
    if(discriminant > 0) {
      arr.push((-b + Math.sqrt(discriminant)) / (2*a));
      arr.push((-b - Math.sqrt(discriminant)) / (2*a));

    } else {arr.push(-b/(2*a))}
  } 

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let s = amount - contribution;
  let p = percent / 100 / 12;
  let n = countMonths;
  let payMounth = s * (p + (p / ((Math.pow(1+p, n)) - 1)));
  let count = parseFloat((payMounth * countMonths).toFixed(2));

  return count;
  
}