const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`Assertion Passed✅✅✅: ${actual} === ${expected}`);
  } else
    console.log(`Assertion Failed🚨🚨🚨: ${actual} !== ${expected}`);

};



const bestTVShowsByGenre = {
  // eslint-disable-next-line camelcase
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};



const findKeyByValue = function(obj, value) {

  for (const key in obj) {
    
    if (obj[key] === undefined) {
      return undefined;
    } else if (obj[key] === value) {
      return key;
    }
  }
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


module.exports = findKeyByValue;