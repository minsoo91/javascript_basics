var myUniq = function ( ary ) {
  var newAry = [];
  for (var i = 0; i < ary.length; i++ ) {
    var flag = false;
    for (var j = 0; j <= newAry.length; j++) {
      if (newAry[j] === ary[i]) {
        flag = true;
      }
    }
    if (flag === false) {
      newAry.push(ary[i]);
    }
  }
  console.log(newAry);
};
// myUniq([5,4,5,1,6]);

var twoSum = function ( ary ) {
  var newAry = [];
  for (var i = 0; i < ary.length; i++ ) {
    for (var j = i + 1; j < ary.length; j++) {
      if (ary[j] + ary[i] === 0) {
        newAry.push([i, j]);
      }
    }
  }
  console.log(newAry);
};

// twoSum([-1, 0, 2, -2, 1]);

var myTranspose = function ( ary ) {
  var newAry = [];
  for (var i = 0; i < ary.length; i++ ) {
    var tempAry =[];
    for (var j = 0; j < ary.length; j++) {
      tempAry.push(ary[j][i]);
    }
    newAry.push(tempAry);
  }
  console.log(newAry);
};


// myTranspose([
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8]
//   ]);


