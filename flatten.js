const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`\u2705\u2705\u2705 The Two Arrays Are Equal!`);
  } else {
    console.log(`\u274C\u274C\u274C The Two Arrays Are Not Equal!`);
  }
  return;
};

const flatten = function(arr){
  for(let i = 0; i < arr.length; i++){
    if(Array.isArray(arr[i])){
      let removed = arr.splice(i, 1);
      let count = 0;
      for(let j = 0; j < removed[0].length; j++){
        arr.splice(i + count, 0, removed[0][j]);
        count++;
      }
    }
  }
  return arr;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, 6]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [3, 4], [5, 6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [3, 4, 2], 5, 6]), [1, 2, 3, 4, 2, 5, 6]);
assertArraysEqual(flatten([[3, 4, 2]]), [3, 4, 2]);

module.exports = flatten;