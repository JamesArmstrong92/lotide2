const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`Assertion Passed✅✅✅: ${actual} === ${expected}`);
  } else
    console.log(`Assertion Failed🚨🚨🚨: ${actual} !== ${expected}`);

};
let string = ['coding is so much fun'];

const countLetters = function(str) {

  let output = {};
  let newStr = str.join("");

  for (let val of newStr) {
    if (output[val]) {
      output[val]++;
    } else {
      output[val] = 1;
    }
  }
  return output;
};



console.log(countLetters(string));