//eqArrays function taking in 2 arrays
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

module.exports = eqArrays;


