const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper( matrix ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let rez = Array(matrix.length).fill().map(() =>Array(matrix[0].length).fill(0))
    for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i + 1]) rez[j][i] += 1
       if (matrix[j][i - 1]) rez[j][i] += 1
         if (matrix[j + 1] && matrix[j + 1][i]) rez[j][i] += 1
             if (matrix[j + 1] && matrix[j + 1][i + 1]) rez[j][i] += 1
                if (matrix[j + 1] && matrix[j + 1][i - 1]) rez[j][i] += 1
                   if (matrix[j - 1] && matrix[j - 1][i]) rez[j][i] += 1
                     if (matrix[j - 1] && matrix[j - 1][i + 1]) rez[j][i] += 1
                       if (matrix[j - 1] && matrix[j - 1][i - 1]) rez[j][i] += 1
    }
}return rez;}


module.exports = {
  minesweeper
};
