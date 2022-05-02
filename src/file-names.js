const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr = [];
  let a = {};
    names.forEach((el) => {
        if (arr.includes(el)) {
          
          a[el] ? a[el]++ : a[el] = 1
            arr.push(el + `(${a[el]})`);
    } 
    else {

      arr.push(el);
      a[el] = 0;
    }
  });
  return arr
}

module.exports = {
  renameFiles
};
