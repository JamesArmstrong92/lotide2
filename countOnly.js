const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`Assertion Passed✅✅✅: ${actual} === ${expected}`);
  } else
    console.log(`Assertion Failed🚨🚨🚨: ${actual} !== ${expected}`);

};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const countOnly = function(allItems, itemsToCount) {
  //Creating empty object to store results
  const results = {};
  //Looping through allItems to get keys
  for (const val of allItems) {
    //If key we want exists within itemsToCount
    if (itemsToCount[val]) {
      //Checking intoresults and getting the valur of the key
      if (results[val]) {
        //Incrementing by one if more than key in object
        results[val] += 1;
        //Equal to one if only one key in object
      } else {
        results[val] = 1;
      
      }
    }
  }
  //Returining results
  return results;
};

let result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });


assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);