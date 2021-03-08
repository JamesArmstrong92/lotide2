const assertEqual = require('./assertEqual');

const tail = function(arr) {
  let output = '';
  
  if (arr === '') {
    return [];
  }
  output = arr.slice(arr.length - 1)[0];
  
  return output;

};


module.exports = tail;

