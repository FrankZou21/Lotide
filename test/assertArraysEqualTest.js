const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2], [1, 2, 3]);
assertArraysEqual([1, 8, 7], [3, 2, 3]);
assertArraysEqual([11, 2, 31], [11, 2, 3]);
assertArraysEqual([], []);