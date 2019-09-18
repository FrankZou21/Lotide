const letterPositions = function(str) {
  const results = {};
  let count = 0;
  const noSpace = str.split(" ").join("").split("");
  for (const ele of noSpace) {
    if (!results[ele]) {
      results[ele] = new Array();
      results[ele].push(count);
    } else {
      results[ele].push(count);
    }
    count++;
  }
  return results;
};
console.log(letterPositions("hello world"));