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

  if (arr1 === arr2) {
    console.log(`Assertion Passed✅✅✅: ${arr1} === ${arr2}`);
  } else
    console.log(`Assertion Failed🚨🚨🚨: ${arr1} === ${arr2}`);
};



const without = function(source, itemsToRemove) {
//Creating varible to house new array
  let output = [];
  //looping through source
  for (let i = 0; i < source.length; i++) {
    //pushing source to output
    output.push(source[i]);
  }
  //Looping thorough source again
  for (let i = 0; i < source.length; i++) {
    //Looping through itemsToRemove
    for (let x = 0; x < itemsToRemove.length; x++) {
      //if Source index = itemsToRemove index
      if (source[i] === itemsToRemove[x]) {
        //Cut out any of the matching pairs in source index
        output.splice(i, 1);
      }
    }
  }
  //Return output
  return output;
};

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
