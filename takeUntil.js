const eqArrays = function(arr1, arr2) {

  //looping through arr1
  for (let i = 0; i < arr1.length; i++) {
    //checking to see if arr1 index is equal to arr2 index
    if (arr1[i] !== arr2[i]) {
      //if it does not equal return false
      return false;
    }
    //if the length of arr1 and arr2 are not equal return false
    if (arr1.length !== arr2.length) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2)) {
    console.log(`Assertion Passed✅✅✅: ${arr1} === ${arr2}`);
  } else
    console.log(`Assertion Failed🚨🚨🚨: ${arr1} === ${arr2}`);
};

//TakeUntil Function
const takeUntil = function(array, callback) {
  //Creating new empty array for results to be pushed into
  const output = [];
  //Looping through array
  for (let item in array) {
    //Checking when the callback condition is met
    if (callback(array[item])) {
      //If so, stop
      break;
    } else {
      //If not, push the array index to output
      output.push(array[item]);
    }
  }
  //return output
  return output;
};


//Tests
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]); // [ 1, 2, 5, 7, 2 ]

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood']);

const data3 = ['a', 'b', 'c', 'd', 'e', 'f'];
const results3 = takeUntil(data3, x => x === 'e');
assertArraysEqual(results3, ['a', 'b', 'c', 'd']);



