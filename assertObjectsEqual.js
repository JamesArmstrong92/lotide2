const eqObjects = function(object1, object2) {
  //Creating Varibles to store keys of obj1 and 2
  let object1Val = Object.keys(object1);
  let object2Val = Object.keys(object2);
  //Checking to see if the length of obj1 and 2 are the same
  if (object1Val.length !== object2Val.length) {
    //If not, return false
    return false;
  }
  //Looping through obj1
  for (let key in object1Val) {
    //If the keys are not the same
    if (object1[key] !== object2[key]) {
      //return false
      return false;
    }
  }
  //Anythign else return true
  return true;
};


const assertObjectsEqual = function(actual, expected) {

  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Objects equal ${inspect(actual)} === ${inspect(expected)}`);
  }
};