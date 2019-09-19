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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

assertArraysEqual(map(["ground", "control", "to", "major", "tom"], word => word[0]), ["g", "c", "t", "m", "t"]);
assertArraysEqual(map([" ", "Hey", "Try", "major", "?ewq1"], word => word[0]), [" ", "H", "T", "m", "?"]);
assertArraysEqual(map(["1", "45sdd", " ", "Nothing", "!!!!"], word => word[0]), ["1", "4", " ", "N", "!"]);