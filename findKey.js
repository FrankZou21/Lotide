const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705\u2705\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274C\u274C\u274C Assertion Failed: ${actual} !== ${expected}`);
  }
  return;
};

const findKey = function(objToSearch, funcFindValue) {
  for (const key in objToSearch) {
    if (funcFindValue(objToSearch[key])) {
      return key;
    }
  }
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 5 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: "2" },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), undefined);

assertEqual(findKey({
  "Blue Hill": { stars: "hey" },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 4 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: "2" },
  "Akelarre":  { stars: 9 }
}, x => x.stars > 4), "Akelarre");

assertEqual(findKey({
  "Blue Hill": { stars: "hey" },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: "N" },
  "elBulli":   { stars: "n" },
  "Ora":       { stars: "2" },
  "Akelarre":  { stars: 9 }
}, x => x.stars === "n"), "elBulli");

