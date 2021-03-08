const reverse = function(str) {

  let newString = '';

  for (let i = str.length - 1; i >= 0; i--) {
  
    newString = newString + str[i];
   
  }
  
  return newString;
};

reverse('Hello');

module.exports = reverse;
 