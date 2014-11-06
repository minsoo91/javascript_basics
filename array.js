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

myUniq([5,4,5,1,6]);

