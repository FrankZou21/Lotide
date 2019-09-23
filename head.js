// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

const head = function(arr){
  return arr[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1]), 1);
assertEqual(head([], undefined));

module.exports = head;