const eqArrays = require("./eqArrays");

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`\u2705\u2705\u2705 The Two Arrays Are Equal!`);
  } else {
    console.log(`\u274C\u274C\u274C The Two Arrays Are Not Equal!`);
  }
  return;
};

module.exports = assertArraysEqual;

