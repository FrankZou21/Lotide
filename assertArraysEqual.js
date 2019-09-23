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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2], [1, 2, 3]);
assertArraysEqual([1, 8, 7], [3, 2, 3]);
assertArraysEqual([11, 2, 31], [11, 2, 3]);
assertArraysEqual([], []);
