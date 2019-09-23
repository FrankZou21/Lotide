const without = function(source, remove) {
  let returnEle = source;
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < remove.length; j++) {
      if (source[i] === remove[j]) {
        returnEle.splice(i, 1);
        i--;
      }
    }
  }
  return returnEle;
};

console.log(without([1, 2], [2, 1]));
console.log(without([1, "hi", 3, 3], ["hi", 3]));
console.log(without([1, 2, 3, 3, 5, 6, 2, 1], [2, 3, 1]));

module.exports = without;