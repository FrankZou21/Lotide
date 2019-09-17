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

const middle = function(arr) {
  const midId = Math.floor(arr.length / 2);
  let arrReturn = [];
  if (arr.length === 1 || arr.length === 2) {
    return arrReturn;
  } else if (midId % 2 === 0) {
    arrReturn.push(arr[midId - 1]);
    arrReturn.push(arr[midId]);
  } else {
    arrReturn.push(arr[midId]);
  }
  return arrReturn;
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([0, 1]), []);
assertArraysEqual(middle([0, 1, 2]), [1]);
assertArraysEqual(middle([0, 1, 2, 3]), [1, 2]);
assertArraysEqual(middle([0, 1, 2, 3, 7, 8, 9, 0]), [3, 7]);