const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705\u2705\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274C\u274C\u274C Assertion Failed: ${actual} !== ${expected}`);
  }
  return;
};

const countLetters = function(strToCount) {
  let ret = {};
  let noSpace = strToCount.split(" ").join("").split("");
  for (const ele of noSpace) {
    if (ret[ele]) {
      ret[ele] += 1;
    } else {
      ret[ele] = 1;
    }
  }
  return ret;
};

assertEqual(countLetters("lighthouse")["h"], 2);
console.log(countLetters("lighthouse in the house"));

module.exports = countLetters;