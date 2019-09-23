# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @frankzou/lotide`

**Require it:**

`const _ = require('@frankzou/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: Checking if actual and expected arrays are equal.
* `assertEqual(actual, expected)`: Checking if actual and expected value are equal.
* `countLetters(strToCount)`: Returns count of letters in strToCount without spaces.
* `countOnly(allItems, itemsToCount)`: Returns number of times itemsToCount occurs in allItems.
* `eqArrays(arr1, arr2)`: Checking if arr1 and arr2 are equal.
* `eqObjects(object1, object2)`: Checking if object1 and object 2 are equal.
* `eqObjectsRecursive(object1, object2)`: Checking if object1 and object2 are equal but for objects inside of objects.
* `findKey(objToSearch, funcFindValue)`: Returning the key in objToSearch that corresponds to funcFindValue.
* `findKeyByValue(location, value)`: Returning the key at the location of value of object location.
* `flatten(arr)`: Returns an array that turns array of arrays into array by flattening.
* `head(arr)`: Returns first vallue of array arr.
* `letterPositions(str)`: Returns object with keys of characters in str with correspoding position in str.
* `map(array, callback)`: Returns array based of function callback and input array.
* `middle(arr)`: Returns middle of input arr. Returns 2 values for even array and 1 for odd.
* `tail(arr)`: Returns input array arr without first element.
* `takeUntil(array, callback)`: Returns new array of array which cuts off at condition callback.
* `head(arr)`: Returns first vallue of array arr.
* `without(source, remove)`: Returns array of source with remove removed from it.

