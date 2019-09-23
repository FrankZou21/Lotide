// const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");
const assert = require("chai").assert;

describe("#middle", () => {
  it("middle of 1 is []", () => {
    let input = [1];
    assert.deepEqual(middle(input), []);
  })
  it("middle of 0, 1 is []", () => {
    let input = [0, 1];
    assert.deepEqual(middle(input), []);
  })
  it("middle of 0, 1, 2 is 1", () => {
    let input = [0, 1, 2];
    assert.deepEqual(middle(input), [1]);
  })
  it("middle of 0, 1, 2, 3 is 1, 2", () => {
    let input = [0, 1, 2, 3];
    assert.deepEqual(middle(input), [1, 2]);
  })
  it("middle of 0, 1, 2, 3, 7, 8, 9, 0 is 3, 7", () => {
    let input = [0, 1, 2, 3, 7, 8, 9, 0];
    assert.deepEqual(middle(input), [3, 7]);
  })
})
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([0, 1]), []);
// assertArraysEqual(middle([0, 1, 2]), [1]);
// assertArraysEqual(middle([0, 1, 2, 3]), [1, 2]);
// assertArraysEqual(middle([0, 1, 2, 3, 7, 8, 9, 0]), [3, 7]);