const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([0, 1]), []);
assertArraysEqual(middle([0, 1, 2]), [1]);
assertArraysEqual(middle([0, 1, 2, 3]), [1, 2]);
assertArraysEqual(middle([0, 1, 2, 3, 7, 8, 9, 0]), [3, 7]);