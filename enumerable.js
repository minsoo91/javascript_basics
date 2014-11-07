var myTimesTwo = function ( ary ) {
  var newAry = [];
  for (var i = 0; i < ary.length; i++ ) {
    newAry.push(ary[i] * 2);
  }
  console.log(newAry);
};

// myTimesTwo([3,5,10]);

var myEach = function ( ary, doThis ) {
  for (var i = 0; i < ary.length; i++ ) {
    doThis(ary[i]);
  }
};

// Prototype!
// Array.prototype.myEach = function ( doThis ) {
//   for (var i = 0; i < this.length; i++ ) {
//     doThis(this[i]);
//   }
// };

var myMap = function ( ary, doThis ) {
  var newAry = [];
  
  myEach(ary, function (el) {
    //side effect: add the el to the ary
    newAry.push(doThis(el));
  });

  console.log(newAry);
};

var tripleThis = function( x ) {
  return x * 3;
};

// myMap([4, 5, 6], tripleThis);

function compareNumbers(a, b) {
  return a - b;
}

var arrayMedian = function ( arr ) {
  var newArr = arr.sort(compareNumbers);
  if (arr.length % 2 === 0) {
    return (newArr[(newArr.length / 2) - 1] + newArr[(newArr.length / 2)]) / 2; 
  }
  else {
    return newArr[Math.floor(newArr.length / 2)]; 
  }
};

var someFunc = function (x, y) {
  return x + y;
};

var myInject = function ( arr, someFunc ) {
  var thingSummed = ""
  
  myEach(arr, function (el) {
    thingSummed = someFunc(thingSummed, el);
  });
  console.log(thingSummed);
}

// myInject(["Yay ", "for ", "strings!"], someFunc );


