const middle = function(arr) {
  const midId = Math.floor(arr.length / 2);
  let arrReturn = [];
  if (arr.length === 1 || arr.length === 2) {
    return arrReturn;
  } else if (midId % 2 === 0) {
    arrReturn.push(arr[midId - 1]);
    arrReturn.push(arr[midId]);
  } else {
    arrReturn.push(arr[midId]);
  }
  return arrReturn;
};

module.exports = middle;