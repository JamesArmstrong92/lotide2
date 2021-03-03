
const eqArrays = function(arr1, arr2) {


  for (let i = 0; i < arr1.length; i++) {
   
    if (arr1[i] !== arr2[i]) {
     
      return false;
    }
   
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


const letterPositions = function(sentence) {
  
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      (results[sentence[i]]).push(i);
    } else if (!(sentence[i] === " ")) {
      results[sentence[i]] = [];
      (results[sentence[i]]).push(i);
    }
  }
  return results;
};
assertArraysEqual(letterPositions("James Armstrong").m, [2, 8]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("Lighthouse").t, [4]);