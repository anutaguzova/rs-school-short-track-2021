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
function minesweeper(matrix) {
  const result = [];
  const rows = matrix.length;
  const columns = matrix[0].length;
  for (let i = 0; i < rows; i++) {
    const line = [];
    for (let j = 0; j < columns; j++) {
      let count = 0;
      if (i > 0 && matrix[i - 1][j] === true) count += 1;
      if (i < (rows - 1) && matrix[i + 1][j] === true) count += 1;
      if (i > 0 && j < (columns - 1) && matrix[i - 1][j + 1] === true) count += 1;
      if (i > 0 && j > 0 && matrix[i - 1][j - 1] === true) count += 1;
      if (i < (rows - 1) && j < (columns - 1) && matrix[i + 1][j + 1] === true) count += 1;
      if (i < (rows - 1) && j > 0 && matrix[i + 1][j - 1] === true) count += 1;
      if (j > 0 && matrix[i][j - 1] === true) count += 1;
      if (j < (columns - 1) && matrix[i][j + 1] === true) count += 1;
      line.push(count);
    }
    result.push(line);
  } return result;
}

module.exports = minesweeper;
