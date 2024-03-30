function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = arr[0];

    max = Math.max(...arr);
    min = Math.min(...arr);
    sum = arr.reduce((a, b) => {return a + b});
  
  avg = parseFloat((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if(arr.length == 0) {
    return 0;
  } else {
    return arr.reduce((a, b) => {return a + b});
  }
}

function differenceMaxMinWorker(...arr) {
  if(arr.length == 0) {
    return 0;
  } else {
    return Math.max(...arr) - Math.min(...arr);
  }
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
    } else sumOddElement += arr[i];
  }
  return sumEvenElement - sumOddElement;

}

function averageEvenElementsWorker(...arr) {
  if(arr.length == 0) {
    return 0;
  } else {
    let sumEvenElement = 0;
    let countEvenElement = 0;

    for(let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        sumEvenElement += arr[i];
        countEvenElement++;
      }
    }
    return sumEvenElement / countEvenElement;
  }

}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for(let i = 0; i < arrOfArr.length; i++) {
    let resultFunc = func(...arrOfArr[i]);
    maxWorkerResult = Math.max(maxWorkerResult, resultFunc);
  }
  return maxWorkerResult;
}
