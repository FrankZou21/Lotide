const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2], [1, 2, 3]), false);
assertEqual(eqArrays([1, 8, 7], [3, 2, 3]), false);
assertEqual(eqArrays([11, 2, 31], [11, 2, 3]), false);
assertEqual(eqArrays([], []), true);