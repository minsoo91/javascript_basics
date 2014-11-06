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

var printThis = function( x ) {
  console.log(x * 2);
};

// var myMap = function ( ary, doThis ) {
//   var newAry = [];
//   for (var i = 0; i < ary.length; i++ ) {
//     newAry.push(doThis(ary[i]));
//   }
//   console.log(newAry);
// };

var myMap = function ( ary, doThis ) {
  var newAry = [];
  var modifyThis = function ( array, doThis ) {
    myEach(ary, doThis);
    // newAry.push(doThis)
  }
  newAry.push(modifyThis(ary, doThis));
    
  console.log(newAry);
};

var tripleThis = function( x ) {
  return x * 3;
};

// myEach([4,5,6], printThis);
// ary.myMap {doThis}

myMap([4, 5, 6], tripleThis);