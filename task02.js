'use strict';

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370]

const getAverageValue = (arr) => {
  let n = 0;

  for(let i = 0; i < arr.length; i += 1){
    n += arr[i] / allCashbox.length
    
    Math.floor(n)
  }

  return Math.floor(n)
  
};

const averageValue = getAverageValue(allCashbox);
console.log(averageValue);

