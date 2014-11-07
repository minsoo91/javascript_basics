var exp = function (base, power) {

  if (power === 0  ) {
    return 1;
  }
  return base * exp(base, power - 1);
};

var exp2 = function (base, power) {

  if (power === 0  ) {
    return 1;
  } else if ( power === 1 ) {
      return base;
  }
  if ( power % 2 === 0 ) {
    var temp = exp(base, power / 2);
    return temp * temp;    
  } else {
    var temp1 = (exp(base, (power - 1) / 2 ));
    return base * (temp1 * temp1);
  }
};


// console.log(exp2(2, 4));

var fib = function ( n ) {
  if (n <= 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } 
  
  return fib(n - 1) + fib(n - 2);
};

// console.log(fib(6));

var bsearch = function(sortedArray, target) {
  var medianIndex = Math.floor(sortedArray.length / 2);
  var rightTrunc = sortedArray.slice(medianIndex + 1);
  var leftTrunc = sortedArray.slice(0, medianIndex);
  if (sortedArray[medianIndex] === target) {
    return medianIndex;
  } else if (sortedArray.length <= 1) {
    return null;
  }
  
  else if (sortedArray[medianIndex] < target) { 
    return (medianIndex + 1) + bsearch(rightTrunc, target);
  }
  else if (sortedArray[medianIndex] > target) {  
    return bsearch(leftTrunc, target);
  }
};

// console.log(bsearch([1, 3, 4, 4, 5, 7, 8], 4));

// var makeChange = function( change, coins ) {
//   var resultCoins = [];
//
//   if (change === 0) {
//     return [];
//   }
//   for (var i = 0; i < coins.length; i++){
//     if (change >= coins[i]) {
//       var currentChange = makeChange(change - coins[i], coins);
//       currentChange.push(coins[i]);
//       return currentChange;
//     }
//   }
// };

// console.log(makeChange(24, [10, 7, 1]));



