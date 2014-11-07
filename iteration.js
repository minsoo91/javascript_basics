var bubbleSort = function ( arr ) {
  var sorted = false;
  while (!sorted) {
    sorted = true;
    for (var i = 0; i < arr.length - 1; i++){
      for (var j = i + 1; j < arr.length; j++){
        if (arr[i] > arr[j]) {
          var temp1 = arr[i];
          arr[i] = arr[j];
          arr[j] = temp1;
          sorted = false;
        } 
      }
    }
  }
  return arr;  
};

// console.log(bubbleSort([4, 35, 76, 7, 32, 2, 4, 5]));

var substrings = function ( str ) {
  var result = [];
  for (var i = 0; i < str.length; i++) {
    for (var j = i+1; j <= str.length; j++) {
      result.push(str.substring(i,j));
    }
  }
  return result;

};

// console.log(substrings("cat"));