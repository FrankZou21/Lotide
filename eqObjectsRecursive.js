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
  let returns = true;
  for (const key in object1) {
    if (typeof(object1[key]) === "object" && typeof(object2[key]) === "object" && !(Array.isArray(object1[key])) && !(Array.isArray(object1[key]))) {
      returns = eqObjects(object1[key], object2[key]);
    } else if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!(eqArrays(object1[key], object2[key]))) {
        returns = false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        returns = false;
      }
    }
  }
  for (const key in object2) {
    if (typeof(object2[key]) === 'object' && typeof(object1[key]) === 'object' && !(Array.isArray(object1[key])) && !(Array.isArray(object1[key]))) {
      eqObjects(object2[key], object1[key]);
    } else if (Array.isArray(object2[key]) && Array.isArray(object1[key])) {
      if (!(eqArrays(object2[key], object1[key]))) {
        returns = false;
      }
    } else {
      if (object2[key] !== object1[key]) {
        returns = false;
      }
    }
  }
  return returns;
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

const c = {a: 1, b: 2, c: ["3", 4], d: {e: 5, f: 5}};
const d = {b: 2, c: ["3", 4], a: 1, d: {f: 6, e: 5}};
assertEqual(eqObjects(c, d), false);

const a = {a: 1, b: 2, c: {e: 5, f: 6}};
const b = {a: 1, b: 2, c: {e: 5, f: 6}};
assertEqual(eqObjects(a, b), true);

const e = {a: 1, b: 2, c: 10, g: {h:5, j: 5}};
const f = {a: 1, b: 2, c: {e: 5, f: 6}, g: {h:5, j: 5}};
assertEqual(eqObjects(e, f), false);