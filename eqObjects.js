const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705\u2705\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274C\u274C\u274C Assertion Failed: ${actual} !== ${expected}`);
  }
  return;
};

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

const ab = {a: 1, b: 2};
const ba = {b: 2, a: 1};
assertEqual(eqObjects(ab, ba), true);
const abc = {a: 1, b: 2, c: 3};
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

const abcd = {a: 1, b: 2, c: ["3", 4]};
const bacd = {b: 2, c: [4, "3"], a: 1};
assertEqual(eqObjects(abcd, bacd), false);

module.exports = eqObjects;