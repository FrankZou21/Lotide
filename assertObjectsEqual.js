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

const eqObjects = function(object1, object2) {
  for (const key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!(eqArrays(object1[key], object2[key]))) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  
  for (const key in object2) {
    if (Array.isArray(object2[key]) && Array.isArray(object1[key])) {
      if (!(eqArrays(object2[key], object1[key]))) {
        return false;
      }
    } else {
      if (object2[key] !== object1[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`\u2705\u2705\u2705 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`\u274C\u274C\u274C Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  return;
};

assertObjectsEqual([1, 2, 3], [1, 2, 3]);
assertObjectsEqual([1, [2, 4], 3], [1, 2, 3, "3"]);
assertObjectsEqual(["1", [2, 4], 3], ["1", [2, 4], 3]);