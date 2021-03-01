const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`Assertion Failed: ${actual} !== ${expected}`);

};

const tail = function(arr) {

  if (arr === '') {
    return [];
  }

  return arr.slice(arr.length - 1)[0];

};


assertEqual(tail([5,6,7]), 7);
assertEqual(tail([1,6,7]), 6);
assertEqual(tail([]), 7);