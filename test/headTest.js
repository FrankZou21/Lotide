const head = require("../head");
// const assertEqual = require("../assertEqual");
const assert = require("chai").assert;

describe("#head", () => {
  it("returns head of [5, 6, 7] which is 5", () => {
    let input = [5, 6, 7];
    assert.strictEqual(head(input), 5);
  });
  it("returns head of [Hello, Lighthouse, Labs] which is Hello", () => {
    let input = ["Hello", "Lighthouse", "Labs"];
    assert.strictEqual(head(input), "Hello");
  })
  it("returns head of [1] which is 1", () => {
    let input = [1];
    assert.strictEqual(head(input), 1);
  })
  it("returns head of [] which is undefined", () => {
    let input = [];
    assert.strictEqual(head(input), undefined);
  })
});

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([1]), 1);
// assertEqual(head([], undefined));