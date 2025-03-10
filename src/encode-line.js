const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let result = '';
  let sum = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) {
      sum += 1
         } else {
      result += `${sum}${str[i]}`
      sum = 1
     }
  }
  return result.split('1').join('')
}

module.exports = {
  encodeLine
};
