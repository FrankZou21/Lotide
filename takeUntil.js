const takeUntil = function(array, callback) {
  let returnArr = [];
  for (const data of array) {
    if (callback(data)) {
      return returnArr;
    }
    returnArr.push(data);
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log('---');

const data3 = [5, 8, 9, 3, 2];
const results3 = takeUntil(data3, x => x <= 3);
console.log(results3);

console.log('---');

const data4 = ["hi", "hi", "to", "Hollywood", "hi"];
const results4 = takeUntil(data4, x => x !== 'hi');
console.log(results4);

module.exports = takeUntil;