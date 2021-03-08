const middle = function(array) {
  //Creating new empty array
  let output = [];
  //Creating variable to store middle index formula
  let middleIndex = Math.floor((array.length - 1) / 2);
  //Creating varible to store middle index of array
  const middleNumber = array[middleIndex];
  //if arr length is less than 3 return output
  if (array.length < 3) {
    return output;
  }
  //if length of arr is not even
  if (!(array.length % 2 === 0)) {
    //push middle number to output
    output.push(middleNumber);
  //Else
  } else {
    //Push middle number to output
    output.push(middleNumber);
    //Push the next number in the index to output
    output.push(array[middleIndex + 1]);
  }
  // return output
  return output;
};

module.exports = middle;


console.log(middle([1, 2, 3, 4, 9, 15, 7, 8]));

