//const assertEqual = require("../assertEqual");
const assert = require('chai').assert;
const tail = require("../tail");

describe("#tail", () => {
  it("The tail of ['Hello', 'Lighthouse', 'Labs'] is ['Lighthouse', 'Labs']", () => {
    let input = ["Hello", "Lighthouse", "Labs"];
      assert.deepEqual(tail(input), ["Lighthouse", "Labs"]);
  })
  it("The tail of ['Hi'] is []", () => {
    let input = ["Hi"];
    assert.deepEqual(tail(input), undefined);
  });
});


// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// const results = tail(["hi"]);
// assertEqual(results[0], undefined);